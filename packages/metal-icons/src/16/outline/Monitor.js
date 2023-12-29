import * as React from 'react'
const SvgMonitor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0 3.25A2.25 2.25 0 0 1 2.25 1h11.5A2.25 2.25 0 0 1 16 3.25v6.5A2.25 2.25 0 0 1 13.75 12h-5v1.5H11a.75.75 0 1 1 0 1.5H5a.75.75 0 1 1 0-1.5h2.25V12h-5A2.25 2.25 0 0 1 0 9.75zm13.75 7.25a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75z"
    />
  </svg>
)
export default SvgMonitor