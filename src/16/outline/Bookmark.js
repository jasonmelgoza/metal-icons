import * as React from 'react'
const SvgBookmark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 3.25A2.25 2.25 0 0 1 4.25 1h7.5A2.25 2.25 0 0 1 14 3.25v10.83a1 1 0 0 1-1.478.878L8.12 12.564a.25.25 0 0 0-.238 0l-4.403 2.394A1 1 0 0 1 2 14.08V3.25Zm2.25-.75a.75.75 0 0 0-.75.75v9.989l3.664-1.992a1.75 1.75 0 0 1 1.672 0l3.664 1.992V3.25a.75.75 0 0 0-.75-.75h-7.5Z"
    />
  </svg>
)
export default SvgBookmark
