import * as React from 'react'
const SvgDuplicate = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M3.75 1A2.75 2.75 0 0 0 1 3.75v10.5A2.75 2.75 0 0 0 3.75 17h1.5a.25.25 0 0 0 .25-.25V9a3.75 3.75 0 0 1 3.75-3.75h7.5A.25.25 0 0 0 17 5V3.75A2.75 2.75 0 0 0 14.25 1z" />
    <path
      fillRule="evenodd"
      d="M9.75 7A2.75 2.75 0 0 0 7 9.75v10.5A2.75 2.75 0 0 0 9.75 23h10.5A2.75 2.75 0 0 0 23 20.25V9.75A2.75 2.75 0 0 0 20.25 7z"
    />
  </svg>
)
export default SvgDuplicate
