import * as React from 'react'
const SvgDocument = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M9 0H3.25A2.25 2.25 0 0 0 1 2.25v11.5A2.25 2.25 0 0 0 3.25 16h9.5A2.25 2.25 0 0 0 15 13.75V6H9.75A.75.75 0 0 1 9 5.25z" />
    <path d="M14.5 4.5h-4v-4z" />
  </svg>
)
export default SvgDocument
