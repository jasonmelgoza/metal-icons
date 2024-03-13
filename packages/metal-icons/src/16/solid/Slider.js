import * as React from 'react'
const SvgSlider = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M2.75 1a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 2.75 1M2 10.5v3.75a.75.75 0 1 0 1.5 0V10.5h1a.75.75 0 1 0 0-1.5H1a.75.75 0 0 0 0 1.5zm6.5-2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 1 0 1.5 0zM7.75 1a.75.75 0 0 1 .75.75V4.5h1a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1 0-1.5h1V1.75A.75.75 0 0 1 7.75 1m6.75 9a.75.75 0 1 1 0 1.5h-1v2.75a.75.75 0 1 1-1.5 0V11.5h-1a.75.75 0 1 1 0-1.5zm-1.75-9a.75.75 0 0 1 .75.75v6.5a.75.75 0 1 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75" />
  </svg>
)
export default SvgSlider