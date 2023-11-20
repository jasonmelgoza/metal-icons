import * as React from 'react'
const SvgCircleAlert = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M12 7a.75.75 0 0 1 .75.75v4.5a.75.75 0 1 1-1.5 0v-4.5A.75.75 0 0 1 12 7m0 8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2z" />
    <path
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19"
    />
  </svg>
)
export default SvgCircleAlert
