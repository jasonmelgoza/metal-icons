import * as React from 'react'
const SvgChartBar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M12 2a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1ZM8 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Zm-3 4a1 1 0 0 0-2 0v3a1 1 0 1 0 2 0v-3Z" />
  </svg>
)
export default SvgChartBar
