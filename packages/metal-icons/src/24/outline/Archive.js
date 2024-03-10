import * as React from 'react'
const SvgArchive = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.75 11a.75.75 0 1 0 0 1.5h4.5a.75.75 0 1 0 0-1.5z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 4.25A2.25 2.25 0 0 1 3.25 2h17.5A2.25 2.25 0 0 1 23 4.25v1.5c0 .78-.397 1.467-1 1.871V19.25A2.75 2.75 0 0 1 19.25 22H4.75A2.75 2.75 0 0 1 2 19.25V7.621A2.25 2.25 0 0 1 1 5.75zM3.5 8h17v11.25c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25zm-.25-4.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h17.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75z"
    />
  </svg>
)
export default SvgArchive
