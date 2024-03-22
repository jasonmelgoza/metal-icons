import * as React from 'react'
const SvgZoomIn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M10.75 6.5a.75.75 0 0 1 .75.75V10h2.75a.75.75 0 1 1 0 1.5H11.5v2.75a.75.75 0 1 1-1.5 0V11.5H7.25a.75.75 0 1 1 0-1.5H10V7.25a.75.75 0 0 1 .75-.75" />
    <path
      fillRule="evenodd"
      d="M10.75 2a8.75 8.75 0 1 0 5.634 15.445l4.336 4.335a.75.75 0 1 0 1.06-1.06l-4.335-4.336A8.75 8.75 0 0 0 10.75 2M3.5 10.75a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0"
    />
  </svg>
)
export default SvgZoomIn
