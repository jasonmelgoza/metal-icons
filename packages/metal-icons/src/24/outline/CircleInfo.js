import * as React from 'react'
const SvgCircleInfo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M11.292 6.293A1 1 0 0 1 11.996 6h.008A.995.995 0 0 1 13 7a1 1 0 0 1-.996 1h-.008A.995.995 0 0 1 11 7a1 1 0 0 1 .292-.707M9.5 9.75a.75.75 0 0 1 .75-.75h1.5a1 1 0 0 1 1 1v6.5h1a.75.75 0 0 1 0 1.5h-1.5a1 1 0 0 1-1-1v-6.5h-1a.75.75 0 0 1-.75-.75" />
    <path
      fillRule="evenodd"
      d="M1 12a11 11 0 1 1 22 0 11 11 0 0 1-22 0m1.5 0a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0"
    />
  </svg>
)
export default SvgCircleInfo
