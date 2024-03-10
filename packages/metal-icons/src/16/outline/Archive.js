import * as React from 'react'
const SvgArchive = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.75 8a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v1.5c0 .698-.409 1.3-1 1.582v6.918A2.25 2.25 0 0 1 12.75 15h-9.5A2.25 2.25 0 0 1 1 12.75V5.832a1.75 1.75 0 0 1-.73-.646"
    />
  </svg>
)
export default SvgArchive
