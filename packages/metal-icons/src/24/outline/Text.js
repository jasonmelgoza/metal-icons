import * as React from 'react'
const SvgText = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M3 3.75A.75.75 0 0 1 3.75 3h16a.75.75 0 0 1 .75.75v2.5a.75.75 0 1 1-1.5 0V4.5h-6.5v15h2a.75.75 0 1 1 0 1.5H9a.75.75 0 1 1 0-1.5h2v-15H4.5v1.75a.75.75 0 0 1-1.5 0z" />
  </svg>
)
export default SvgText
