import * as React from 'react'
const SvgCircleArrowDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M12 6a.75.75 0 0 1 .75.75v8.614l2.955-3.129a.75.75 0 0 1 1.09 1.03l-4.25 4.5a.75.75 0 0 1-.533.234L12 18h-.012a.75.75 0 0 1-.535-.237l-4.248-4.498a.75.75 0 0 1 1.09-1.03l2.955 3.129V6.75A.75.75 0 0 1 12 6" />
    <path
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19"
    />
  </svg>
)
export default SvgCircleArrowDown
