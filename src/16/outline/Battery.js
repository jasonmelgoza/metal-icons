import * as React from 'react'
const SvgBattery = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 3A2.25 2.25 0 0 0 0 5.25v5.5A2.25 2.25 0 0 0 2.25 13h8.5A2.25 2.25 0 0 0 13 10.75v-5.5A2.25 2.25 0 0 0 10.75 3h-8.5ZM1.5 5.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-5.5Z"
    />
    <path
      fill="currentColor"
      d="M15.5 6.75a.75.75 0 1 0-1.5 0v2.5a.75.75 0 1 0 1.5 0v-2.5Z"
    />
  </svg>
)
export default SvgBattery
