import * as React from 'react'
const SvgCircleCheck = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m2.72 5.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47z"
    />
  </svg>
)
export default SvgCircleCheck
