import * as React from 'react'
const SvgDashboard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 3.75C2 2.784 2.784 2 3.75 2h5.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 9.25 22h-5.5A1.75 1.75 0 0 1 2 20.25zm11 0c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 11h-5.5A1.75 1.75 0 0 1 13 9.25zM14.75 13A1.75 1.75 0 0 0 13 14.75v5.5c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 22 20.25v-5.5A1.75 1.75 0 0 0 20.25 13z"
    />
  </svg>
)
export default SvgDashboard
