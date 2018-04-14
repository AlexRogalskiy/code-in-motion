import * as React from "react"

import styled, { css } from "styled-components"
import { Token, tokenize } from "./tokenize"
import { PrettierActivitiyIndicator } from "./PrettierActivityIndicator"

const WIDTH = 400
const HEIGHT = 300

const editorBox = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  max-width: ${WIDTH}px;
  max-height: ${HEIGHT}px;
  overflow: scroll;
  background: rgb(27, 43, 53);
  padding: 20px 20px;
  margin: 0;
  white-space: pre-wrap;
  font-family: "Fira Code", "Menlo", "Source Code Pro", "Monaco", "Consolas",
    monospace;
`

const EditorBoxWrapper = styled.div`
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  max-width: ${WIDTH}px;
  max-height: ${HEIGHT}px;
  overflow: scroll;
  margin-bottom: 50px;
`

const CodeUnderlay = styled.div`
  ${editorBox};
  pointer-events: none;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.1);
`

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ActivityIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-bottom: 1px; */
  width: 100%;
  /* padding-left: 14px; */
`

const TextArea = styled.textarea`
  ${editorBox};
  opacity: 0;
  border: 0;
  outline: 0;
  line-height: 1.4em;
  font-size: 16px;
  border-radius: 0;
`

export class Editor extends React.Component<
  { text: string },
  {
    text: string
    selectionStart: number
    selectionEnd: number
    pretty: boolean
  }
> {
  state = {
    text: this.props.text,
    selectionStart: 0,
    selectionEnd: 0,
    pretty: true,
  }

  timeout = null as NodeJS.Timer | null

  setNewText = (ev: React.FormEvent<HTMLTextAreaElement>) => {
    const text = ev.currentTarget.value
    this.setState({ text, pretty: false })
    this.handleSelectionChange()
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {
      this.setState({ pretty: true })
    }, 800)
  }

  textArea: HTMLTextAreaElement | null = null
  codeOverlay: HTMLDivElement | null = null

  handleSelectionChange = () => {
    if (this.textArea) {
      this.setState({
        selectionStart: this.textArea.selectionStart,
        selectionEnd: this.textArea.selectionEnd,
      })
    }
  }

  componentDidMount() {
    document.addEventListener("selectionchange", this.handleSelectionChange)
  }

  componentWillUnmount() {
    document.removeEventListener("selectionchange", this.handleSelectionChange)
  }

  render() {
    const { text, selectionStart, selectionEnd, pretty } = this.state

    const selectionMin = Math.min(selectionStart, selectionEnd)
    const selectionMax = Math.max(selectionStart, selectionEnd)

    return (
      <EditorWrapper>
        <ActivityIndicatorWrapper>
          <PrettierActivitiyIndicator dirty={!pretty} />
        </ActivityIndicatorWrapper>
        <EditorBoxWrapper>
          <CodeUnderlay innerRef={ref => (this.codeOverlay = ref)}>
            {renderCode(text, tokenize(text), selectionMin, selectionMax)}
          </CodeUnderlay>
          <TextArea
            onInput={this.setNewText}
            defaultValue={text}
            innerRef={ref => {
              this.textArea = ref
              if (this.textArea) {
                this.textArea.onscroll = () => {
                  if (this.codeOverlay && this.textArea) {
                    this.codeOverlay.scrollTop = this.textArea.scrollTop
                  }
                }
              }
            }}
          />
        </EditorBoxWrapper>
      </EditorWrapper>
    )
  }
}

let key = 0

const cursor = () => (
  <span className="cursor" key={key++}>
    &nbsp;
  </span>
)

function rangesOverlap(
  startA: number,
  endA: number,
  startB: number,
  endB: number,
) {
  return !(
    (startA <= startB && endA <= startB) ||
    (startB <= startA && endB <= startA)
  )
}

function renderCode(
  text: string,
  tokens: Token[],
  selectionStart: number,
  selectionEnd: number,
) {
  const spans = [] as any

  tokens.forEach((token: Token, i, tokens) => {
    let type = token.type as Token["type"] | "function"
    switch (type) {
      case "name":
        if (tokens[i + 1] && tokens[i + 1].value === "(") {
          type = "function"
        }
    }

    if (!rangesOverlap(token.start, token.end, selectionStart, selectionEnd)) {
      if (selectionStart === selectionEnd && selectionStart === token.start) {
        spans.push(cursor())
      }
      spans.push(
        <span key={key++} className={type}>
          {token.value}
        </span>,
      )
    } else {
      if (selectionStart >= token.start && selectionEnd >= token.end) {
        // starts during this token
        if (selectionStart !== token.start) {
          spans.push(
            <span key={key++} className={type}>
              {text.slice(token.start, selectionStart)}
            </span>,
          )
        }
        spans.push(
          <span key={key++} className={type + " selection"}>
            {text.slice(selectionStart, token.end)}
          </span>,
        )
      } else if (selectionStart <= token.start && selectionEnd < token.end) {
        // ends during this token
        spans.push(
          <span key={key++} className={type + " selection"}>
            {text.slice(token.start, selectionEnd)}
          </span>,
        )
        if (token.end !== selectionEnd) {
          spans.push(
            <span key={key++} className={type}>
              {text.slice(selectionEnd, token.end)}
            </span>,
          )
        }
      } else if (selectionStart > token.start && selectionEnd < token.end) {
        // starts and ends during this token
        if (selectionStart !== token.start) {
          spans.push(
            <span key={key++} className={type}>
              {text.slice(token.start, selectionStart)}
            </span>,
          )
        }
        if (selectionStart === selectionEnd) {
          spans.push(cursor())
        } else {
          spans.push(
            <span key={key++} className={type + " selection"}>
              {text.slice(selectionStart, selectionEnd)}
            </span>,
          )
        }
        if (token.end !== selectionEnd) {
          spans.push(
            <span key={key++} className={type}>
              {text.slice(selectionEnd, token.end)}
            </span>,
          )
        }
      } else {
        // encompasses this token
        spans.push(
          <span key={key++} className={type + " selection"}>
            {token.value}
          </span>,
        )
      }
    }
  })

  return spans
}