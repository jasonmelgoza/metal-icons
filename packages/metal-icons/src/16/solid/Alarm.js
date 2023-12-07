import * as React from 'react'
const SvgAlarm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.558 1.909a7.5 7.5 0 0 0-3.702 2.79L.628 3.837A9 9 0 0 1 5.07.49z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 2.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5m.5 3.5a.75.75 0 1 0-1.5 0v3.67l3.607 2.219a.75.75 0 0 0 .786-1.278L8.5 8.581z"
    />
    <path
      fill="currentColor"
      d="M15.372 3.838A9 9 0 0 0 10.93.49l-.488 1.419a7.5 7.5 0 0 1 3.702 2.79z"
    />
  </svg>
)
export default SvgAlarm
