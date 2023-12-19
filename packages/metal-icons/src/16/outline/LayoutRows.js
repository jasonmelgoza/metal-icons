import * as React from 'react'
const SvgLayoutRows = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16 3.25A2.25 2.25 0 0 0 13.75 1H2.25A2.25 2.25 0 0 0 0 3.25v9.5A2.25 2.25 0 0 0 2.25 15h11.5A2.25 2.25 0 0 0 16 12.75zm-1.5 9.5V11h-13v1.75c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75M1.5 6.5v3h13v-3zm13-1.5V3.25a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75V5z"
    />
  </svg>
)
export default SvgLayoutRows
