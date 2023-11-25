import * as React from 'react'
const SvgClock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8.5-4.25a.75.75 0 0 0-1.5 0V8c0 .284.16.544.415.67l2.5 1.25a.749.749 0 1 0 .67-1.34L8.5 7.535z"
    />
  </svg>
)
export default SvgClock
