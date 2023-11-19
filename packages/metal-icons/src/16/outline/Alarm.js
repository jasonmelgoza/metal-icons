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
      d="M8.5 5.75a.75.75 0 1 0-1.5 0v3.67l3.607 2.219a.75.75 0 0 0 .786-1.278L8.5 8.581z"
    />
    <path
      fill="currentColor"
      d="M8 2.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5M4.288 5.288a5.25 5.25 0 1 1 7.424 7.424 5.25 5.25 0 0 1-7.424-7.424Z"
    />
    <path
      fill="currentColor"
      d="M1.856 4.698a7.5 7.5 0 0 1 3.702-2.79L5.07.49A9 9 0 0 0 .628 3.838zm13.516-.86A9 9 0 0 0 10.93.49l-.488 1.419a7.5 7.5 0 0 1 3.702 2.79z"
    />
  </svg>
)
export default SvgAlarm