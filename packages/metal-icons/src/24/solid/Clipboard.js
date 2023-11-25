import * as React from 'react'
const SvgClipboard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.75 1A1.75 1.75 0 0 0 7 2.75V3H5.75A2.75 2.75 0 0 0 3 5.75v14.5A2.75 2.75 0 0 0 5.75 23h12.5A2.75 2.75 0 0 0 21 20.25V5.75A2.75 2.75 0 0 0 18.25 3H17v-.25A1.75 1.75 0 0 0 15.25 1zM8.5 2.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25z"
    />
  </svg>
)
export default SvgClipboard