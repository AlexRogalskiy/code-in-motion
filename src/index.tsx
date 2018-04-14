// do char diff on raw text.
// should be possilbe to infer a source map from that.
// at least you can find out which ranges were deleted from
// the original text, and then map everything else

import * as React from "react"
import { render } from "react-dom"
import styled, { injectGlobal } from "styled-components"
import { Button } from "./Button"
import { GithubMark } from "./GithubMark"
import { Editor } from "./Editor"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, #main, body {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    color: rgb(192, 206, 216);
    line-height: 1.4em;
    font-size: 16px;
    background: #1a1d21;
  }
  h1 {
    margin-bottom: 60px;
    font-size: 35px;
    font-weight: 200;
    letter-spacing: 4px;
  }
  .selection {
    background: rgba(255,255,255,0.2);
  }
  @keyframes cusrorAnimation {
    from {
      opacity: 1;
    }
    
    45% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    95% {
      opacity: 0;
    }
    
    to {
      opacity: 1
    }
  }
  .cursor {
    animation: cusrorAnimation 0.9s linear infinite; 
    background: #ffffffa6;
    display: inline-block;
    position: absolute;
    width: 2px;
  }
  .error {
    background: #714a4a;
    color: red;
    &.selection {
      background: #8e6868;
    }
  }
  .function {
    color: hsla(53, 71%, 80%);
  }
  .punctuation {
    color: rgb(161, 177, 185);
  }
  .reserved {
    color: rgb(191, 132, 191);
  }
  .string {
    color: hsl(43, 76%, 49%);
  }
  .name {
    color: rgb(165, 227, 228);
  }
  .number {
    color: rgb(119, 186, 230);
  }
  .comment {
    color: #579249;
  }
`

const text = `function* banana() {
  yield banana();
  hahaha what() ?
  " this string is unfinished
}
`

const App = () => (
  <PageWrapper>
    <h1>Prettier Prettier</h1>
    <Editor text={text} />
    <Button href="https://github.com/ds300/prettier-thing">
      View source on GitHub <GithubMark />
    </Button>
  </PageWrapper>
)

render(<App />, document.getElementById("main"))
