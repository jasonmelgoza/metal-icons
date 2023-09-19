import * as React from 'react'
const SvgArchive = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v1.5c0 .696-.407 1.297-.996 1.58H.996A1.75 1.75 0 0 1 0 4.25v-1.5Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 7.51h14v5.24A2.25 2.25 0 0 1 12.75 15h-9.5A2.25 2.25 0 0 1 1 12.75V7.51Zm5.22 1.71A.75.75 0 0 1 6.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.53-1.28Z"
    />
  </svg>
)
export default SvgArchive
