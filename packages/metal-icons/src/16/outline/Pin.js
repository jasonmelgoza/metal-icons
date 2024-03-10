import * as React from 'react'
const SvgPin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M7 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
    />
    <path
      fillRule="evenodd"
      d="M8 0C4.138 0 1 3.114 1 6.964a6.93 6.93 0 0 0 2.085 4.957l4.42 3.892a.75.75 0 0 0 .99 0l4.42-3.892A6.93 6.93 0 0 0 15 6.964C15 3.114 11.862 0 8 0M2.5 6.964C2.5 3.95 4.958 1.5 8 1.5s5.5 2.45 5.5 5.464c0 1.5-.607 2.858-1.594 3.847L8 14.251l-3.906-3.44A5.43 5.43 0 0 1 2.5 6.964"
    />
  </svg>
)
export default SvgPin
