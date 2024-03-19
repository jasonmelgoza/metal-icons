import * as React from 'react'
const SvgTag = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M5 4a1 1 0 0 0 0 2h.006a1 1 0 0 0 0-2z" />
    <path
      fillRule="evenodd"
      d="M2.25 1C1.56 1 1 1.56 1 2.25v5.246c0 .596.237 1.169.659 1.59l5.383 5.384a2.25 2.25 0 0 0 3.182 0l4.246-4.246a2.25 2.25 0 0 0 0-3.182L9.087 1.66A2.25 2.25 0 0 0 7.496 1zm.25 6.496V2.5h4.996c.199 0 .39.08.53.22l5.383 5.383a.75.75 0 0 1 0 1.06L9.163 13.41a.75.75 0 0 1-1.06 0L2.72 8.026a.75.75 0 0 1-.22-.53"
    />
  </svg>
)
export default SvgTag
