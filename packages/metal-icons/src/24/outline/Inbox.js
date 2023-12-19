import * as React from 'react'
const SvgInbox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 4.75A2.75 2.75 0 0 1 4.75 2h14.5A2.75 2.75 0 0 1 22 4.75v14.5A2.75 2.75 0 0 1 19.25 22H4.75A2.75 2.75 0 0 1 2 19.25zm1.5 8.75v5.75c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V13.5h-3.19l-2.78 2.78a.75.75 0 0 1-.53.22h-4a.75.75 0 0 1-.53-.22L6.69 13.5zm17-1.5V4.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25V12H7a.75.75 0 0 1 .53.22L10.31 15h3.38l2.78-2.78A.75.75 0 0 1 17 12z"
    />
  </svg>
)
export default SvgInbox
