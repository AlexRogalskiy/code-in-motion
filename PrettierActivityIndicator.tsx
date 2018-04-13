import * as React from "react"
import { injectGlobal } from "styled-components"

injectGlobal`
  #activity-indicator {
    transform: scale(0.5);
    g {
      transition: transform 0.24s ease-in-out;
    }
    #group_0 {
      transition-delay: 0.3s;
    }
    #group_1 {
      transition-delay: 0.25s;
    }
    #group_2 {
      transition-delay: 0.2s;
    }
    #group_3 {
      transition-delay: 0.15s;
    }
    #group_4 {
      transition-delay: 0.1s;
    }
    #group_5 {
      transition-delay: 0.05s;
    }
  }
  #activity-indicator.dirty {
    #group_0 {
      transform: translateX(-30px);
      transition-delay: 0s;
    }
    #group_1 {
      transform: translateX(30px);
      transition-delay: 0.05s;
    }
    #group_2 {
      transform: translateX(-40px);
      transition-delay: 0.1s;
    }
    #group_3 {
      transform: translateX(18px);
      transition-delay: 0.15s;
    }
    #group_4 {
      transform: translateX(-12px);
      transition-delay: 0.2s;
    }
    #group_5 {
      transform: translateX(24px);
      transition-delay: 0.25s;
    }
    #group_6 {
      transform: translateX(-24px);
      transition-delay: 0.35s;
    }
  } 
`

export const PrettierActivitiyIndicator = ({ dirty }: { dirty: boolean }) => (
  <svg
    id="activity-indicator"
    width="129"
    height="40"
    viewBox="0 0 129 40"
    xmlns="http://www.w3.org/2000/svg"
    className={dirty ? "dirty" : "not-dirty"}
  >
    <g id="Canvas" fill="none">
      <g id="prettier thing">
        <g id="group_6">
          <rect
            width="9"
            height="4"
            rx="2"
            transform="translate(82 36)"
            fill="#434F5F"
            id="Rectangle"
          />
          <rect
            width="13"
            height="4"
            rx="2"
            transform="translate(67 36)"
            fill="#434F5F"
            id="Rectangle_2"
          />
          <rect
            width="13"
            height="4"
            rx="2"
            transform="translate(93 36)"
            fill="#434F5F"
            id="Rectangle_3"
          />
          <rect
            width="9"
            height="4"
            rx="2"
            transform="translate(41 36)"
            fill="#434F5F"
            id="Rectangle_4"
          />
          <rect
            width="11"
            height="4"
            rx="2"
            transform="translate(10 36)"
            fill="#434F5F"
            id="Rectangle_5"
          />
          <rect
            width="8"
            height="4"
            rx="2"
            transform="translate(0 36)"
            fill="#434F5F"
            id="Rectangle_6"
          />
          <rect
            width="16"
            height="4"
            rx="2"
            transform="translate(23 36)"
            fill="#434F5F"
            id="Rectangle_7"
          />
          <rect
            width="21"
            height="4"
            rx="2"
            transform="translate(108 36)"
            fill="#434F5F"
            id="Rectangle_8"
          />
          <rect
            width="13"
            height="4"
            rx="2"
            transform="translate(52 36)"
            fill="#F6B94B"
            id="Rectangle_9"
          />
        </g>
        <g id="group_5">
          <rect
            width="6"
            height="4"
            rx="2"
            transform="translate(26 30)"
            fill="#434F5F"
            id="Rectangle_10"
          />
          <rect
            width="4"
            height="4"
            rx="2"
            transform="translate(77 30)"
            fill="#434F5F"
            id="Rectangle_11"
          />
          <rect
            width="17"
            height="4"
            rx="2"
            transform="translate(83 30)"
            fill="#434F5F"
            id="Rectangle_12"
          />
          <rect
            width="8"
            height="4"
            rx="2"
            transform="translate(67 30)"
            fill="#434F5F"
            id="Rectangle_13"
          />
          <rect
            width="18"
            height="4"
            rx="2"
            transform="translate(102 30)"
            fill="#434F5F"
            id="Rectangle_14"
          />
          <rect
            width="7"
            height="4"
            rx="2"
            transform="translate(122 30)"
            fill="#434F5F"
            id="Rectangle_15"
          />
          <rect
            width="16"
            height="4"
            rx="2"
            transform="translate(34 30)"
            fill="#434F5F"
            id="Rectangle_16"
          />
          <rect
            width="24"
            height="4"
            rx="2"
            transform="translate(0 30)"
            fill="#434F5F"
            id="Rectangle_17"
          />
          <rect
            width="13"
            height="4"
            rx="2"
            transform="translate(52 30)"
            fill="#5AB3B3"
            id="Rectangle_18"
          />
        </g>
        <g id="group_4">
          <rect
            width="18"
            height="4"
            rx="2"
            transform="translate(52 24)"
            fill="#E85F61"
            id="Rectangle_19"
          />
          <rect
            width="9"
            height="4"
            rx="2"
            transform="translate(93 24)"
            fill="#434F5F"
            id="Rectangle_20"
          />
          <rect
            width="6"
            height="4"
            rx="2"
            transform="translate(44 24)"
            fill="#434F5F"
            id="Rectangle_21"
          />
          <rect
            width="19"
            height="4"
            rx="2"
            transform="translate(72 24)"
            fill="#434F5F"
            id="Rectangle_22"
          />
          <rect
            width="10"
            height="4"
            rx="2"
            transform="translate(104 24)"
            fill="#434F5F"
            id="Rectangle_23"
          />
          <rect
            width="13"
            height="4"
            rx="2"
            transform="translate(116 24)"
            fill="#434F5F"
            id="Rectangle_24"
          />
          <rect
            width="21"
            height="4"
            rx="2"
            transform="translate(21 24)"
            fill="#434F5F"
            id="Rectangle_25"
          />
          <rect
            width="19"
            height="4"
            rx="2"
            transform="translate(0 24)"
            fill="#434F5F"
            id="Rectangle_26"
          />
        </g>
        <g id="group_3">
          <rect
            width="18"
            height="4"
            rx="2"
            transform="translate(65 18)"
            fill="#BE86BE"
            id="Rectangle_27"
          />
          <rect
            width="9"
            height="4"
            rx="2"
            transform="translate(100 18)"
            fill="#434F5F"
            id="Rectangle_28"
          />
          <rect
            width="13"
            height="4"
            rx="2"
            transform="translate(111 18)"
            fill="#434F5F"
            id="Rectangle_29"
          />
          <rect
            width="3"
            height="4"
            rx="1.5"
            transform="translate(126 18)"
            fill="#434F5F"
            id="Rectangle_30"
          />
          <rect
            width="13"
            height="4"
            rx="2"
            transform="translate(85 18)"
            fill="#434F5F"
            id="Rectangle_31"
          />
          <rect
            width="16"
            height="4"
            rx="2"
            transform="translate(34 18)"
            fill="#434F5F"
            id="Rectangle_32"
          />
          <rect
            width="24"
            height="4"
            rx="2"
            transform="translate(8 18)"
            fill="#434F5F"
            id="Rectangle_33"
          />
          <rect
            width="6"
            height="4"
            rx="2"
            transform="translate(0 18)"
            fill="#434F5F"
            id="Rectangle_34"
          />
          <rect
            width="11"
            height="4"
            rx="2"
            transform="translate(52 18)"
            fill="#5AB3B3"
            id="Rectangle_35"
          />
        </g>
        <g id="group_2">
          <rect
            width="9"
            height="4"
            rx="2"
            transform="translate(52 12)"
            fill="#E85F61"
            id="Rectangle_36"
          />
          <rect
            width="9"
            height="4"
            rx="2"
            transform="translate(63 12)"
            fill="#434F5F"
            id="Rectangle_37"
          />
          <rect
            width="18"
            height="4"
            rx="2"
            transform="translate(32 12)"
            fill="#434F5F"
            id="Rectangle_38"
          />
          <rect
            width="13"
            height="4"
            rx="2"
            transform="translate(17 12)"
            fill="#434F5F"
            id="Rectangle_39"
          />
          <rect
            width="15"
            height="4"
            rx="2"
            transform="translate(0 12)"
            fill="#434F5F"
            id="Rectangle_40"
          />
          <rect
            width="11"
            height="4"
            rx="2"
            transform="translate(87 12)"
            fill="#434F5F"
            id="Rectangle_41"
          />
          <rect
            width="29"
            height="4"
            rx="2"
            transform="translate(100 12)"
            fill="#434F5F"
            id="Rectangle_42"
          />
          <rect
            width="11"
            height="4"
            rx="2"
            transform="translate(74 12)"
            fill="#F6B94B"
            id="Rectangle_43"
          />
        </g>
        <g id="group_1">
          <rect
            width="11"
            height="4"
            rx="2"
            transform="translate(52 6)"
            fill="#F6B94B"
            id="Rectangle_44"
          />
          <rect
            width="19"
            height="4"
            rx="2"
            transform="translate(65 6)"
            fill="#5AB3B3"
            id="Rectangle_45"
          />
          <rect
            width="16"
            height="4"
            rx="2"
            transform="translate(95 6)"
            fill="#434F5F"
            id="Rectangle_46"
          />
          <rect
            width="7"
            height="4"
            rx="2"
            transform="translate(113 6)"
            fill="#434F5F"
            id="Rectangle_47"
          />
          <rect
            width="7"
            height="4"
            rx="2"
            transform="translate(122 6)"
            fill="#434F5F"
            id="Rectangle_48"
          />
          <rect
            width="7"
            height="4"
            rx="2"
            transform="translate(86 6)"
            fill="#434F5F"
            id="Rectangle_49"
          />
          <rect
            width="16"
            height="4"
            rx="2"
            transform="translate(24 6)"
            fill="#434F5F"
            id="Rectangle_50"
          />
          <rect
            width="7"
            height="4"
            rx="2"
            transform="translate(15 6)"
            fill="#434F5F"
            id="Rectangle_51"
          />
          <rect
            width="13"
            height="4"
            rx="2"
            transform="translate(0 6)"
            fill="#434F5F"
            id="Rectangle_52"
          />
          <rect
            width="8"
            height="4"
            rx="2"
            transform="translate(42 6)"
            fill="#434F5F"
            id="Rectangle_53"
          />
        </g>
        <g id="group_0">
          <rect
            width="24"
            height="4"
            rx="2"
            transform="translate(52)"
            fill="#BE86BE"
            id="Rectangle_54"
          />
          <rect
            width="7"
            height="4"
            rx="2"
            transform="translate(96)"
            fill="#434F5F"
            id="Rectangle_55"
          />
          <rect
            width="16"
            height="4"
            rx="2"
            transform="translate(78)"
            fill="#434F5F"
            id="Rectangle_56"
          />
          <rect
            width="24"
            height="4"
            rx="2"
            transform="translate(105)"
            fill="#434F5F"
            id="Rectangle_57"
          />
          <rect
            width="17"
            height="4"
            rx="2"
            transform="translate(33)"
            fill="#434F5F"
            id="Rectangle_58"
          />
          <rect width="31" height="4" rx="2" fill="#434F5F" id="Rectangle_59" />
        </g>
      </g>
    </g>
  </svg>
)