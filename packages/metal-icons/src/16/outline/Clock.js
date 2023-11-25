import * as React from 'react'
const SvgClock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M8.5 3.75a.75.75 0 0 0-1.5 0V8c0 .284.16.544.415.67l2.5 1.25a.749.749 0 1 0 .67-1.34L8.5 7.535z" />
    <path
      fillRule="evenodd"
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0"
    />
  </svg>
)
export default SvgClock
