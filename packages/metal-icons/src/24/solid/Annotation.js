import * as React from 'react'
const SvgAnnotation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.25 3A2.75 2.75 0 0 1 23 5.75v9.5A2.75 2.75 0 0 1 20.25 18h-4.5l-2.83 3.519a1.125 1.125 0 0 1-1.84 0L8.25 18H4.375A3.375 3.375 0 0 1 1 14.625V5.75A2.75 2.75 0 0 1 3.75 3z"
    />
  </svg>
)
export default SvgAnnotation
