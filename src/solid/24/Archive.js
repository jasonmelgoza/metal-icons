import * as React from 'react'
const SvgArchive = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1 4.25A2.25 2.25 0 0 1 3.25 2h17.5A2.25 2.25 0 0 1 23 4.25v1.5c0 .78-.396 1.466-.999 1.87H1.998A2.248 2.248 0 0 1 1 5.75v-1.5Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 9h20v10.25A2.75 2.75 0 0 1 19.25 22H4.75A2.75 2.75 0 0 1 2 19.25V9Zm7.22 3.22a.75.75 0 0 1 .53-.22h4.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1-.53-1.28Z"
    />
  </svg>
)
export default SvgArchive
