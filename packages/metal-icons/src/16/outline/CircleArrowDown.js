import * as React from 'react'
const SvgCircleArrowDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"
    />
    <path d="M5.755 8.195a.75.75 0 0 0-1.01 1.11l2.75 2.5a.748.748 0 0 0 1.01 0l2.75-2.5a.75.75 0 1 0-1.01-1.11L8.75 9.555V4.75a.75.75 0 0 0-1.5 0v4.805z" />
  </svg>
)
export default SvgCircleArrowDown
