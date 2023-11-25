import * as React from 'react'
const SvgCircleMinus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M8.25 11.25a.75.75 0 1 0 0 1.5h7.5a.75.75 0 1 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0"
    />
  </svg>
)
export default SvgCircleMinus
