import * as React from 'react'
const SvgSlider = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M3.75 2.5a.75.75 0 0 1 .75.75v7a.75.75 0 1 1-1.5 0v-7a.75.75 0 0 1 .75-.75M3 14.5v6.25a.75.75 0 1 0 1.5 0V14.5h2a.75.75 0 1 0 0-1.5H1a.75.75 0 1 0 0 1.5zm9.5-2.75a.75.75 0 1 0-1.5 0v9a.75.75 0 1 0 1.5 0zm-.75-9.25a.75.75 0 0 1 .75.75V7.5h2a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1 0-1.5h2V3.25a.75.75 0 0 1 .75-.75M22.5 15a.75.75 0 1 1 0 1.5h-2v4.25a.75.75 0 1 1-1.5 0V16.5h-2a.75.75 0 1 1 0-1.5zM19.75 2.5a.75.75 0 0 1 .75.75v9a.75.75 0 1 1-1.5 0v-9a.75.75 0 0 1 .75-.75" />
  </svg>
)
export default SvgSlider
