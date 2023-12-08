import * as React from 'react'
const SvgDuplicate = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M2.25 0A2.25 2.25 0 0 0 0 2.25v7.5A2.25 2.25 0 0 0 2.25 12h.25a.75.75 0 1 0 0-1.5h-.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v.25a.75.75 0 1 0 1.5 0v-.25A2.25 2.25 0 0 0 9.75 0z" />
    <path
      fillRule="evenodd"
      d="M6.25 4A2.25 2.25 0 0 0 4 6.25v7.5A2.25 2.25 0 0 0 6.25 16h7.5A2.25 2.25 0 0 0 16 13.75v-7.5A2.25 2.25 0 0 0 13.75 4zM5.5 6.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75z"
    />
  </svg>
)
export default SvgDuplicate
