import * as React from 'react'
const SvgCircleArrowLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19"
    />
    <path d="M18 11.99a.75.75 0 0 1-.75.75H8.636l3.129 2.954a.75.75 0 0 1-1.03 1.09l-4.5-4.25a.75.75 0 0 1-.234-.533L6 11.99v-.012a.75.75 0 0 1 .237-.535l4.498-4.248a.75.75 0 0 1 1.03 1.09L8.636 11.24h8.614a.75.75 0 0 1 .75.75" />
  </svg>
)
export default SvgCircleArrowLeft
