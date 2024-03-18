import * as React from 'react'
const SvgText = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M2 2.75A.75.75 0 0 1 2.75 2h10a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0V3.5H8.5v9H10a.75.75 0 1 1 0 1.5H5.5a.75.75 0 1 1 0-1.5H7v-9H3.5v.75a.75.75 0 0 1-1.5 0z" />
  </svg>
)
export default SvgText
