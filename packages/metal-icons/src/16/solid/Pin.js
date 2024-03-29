import * as React from 'react'
const SvgPin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1 6.964C1 3.114 4.138 0 8 0s7 3.114 7 6.964a6.93 6.93 0 0 1-2.085 4.957l-4.42 3.892a.75.75 0 0 1-.99 0l-4.42-3.892A6.93 6.93 0 0 1 1 6.964m5.232-1.732a2.5 2.5 0 1 1 3.536 3.536 2.5 2.5 0 0 1-3.536-3.536"
    />
  </svg>
)
export default SvgPin
