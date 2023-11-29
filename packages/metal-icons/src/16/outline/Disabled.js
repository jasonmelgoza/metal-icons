import * as React from 'react'
const SvgDisabled = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.5 8a6.5 6.5 0 0 1 10.535-5.096l-9.131 9.131A6.472 6.472 0 0 1 1.5 8m2.465 5.096a6.5 6.5 0 0 0 9.131-9.131z"
    />
  </svg>
)
export default SvgDisabled
