import * as React from 'react'
const SvgCircleAlert = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m-.75 6.75a.75.75 0 1 1 1.5 0v4.5a.75.75 0 1 1-1.5 0zM11 16a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1"
    />
  </svg>
)
export default SvgCircleAlert
