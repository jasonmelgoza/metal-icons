import * as React from 'react'
const SvgTag = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1 2.25C1 1.56 1.56 1 2.25 1h5.246a2.25 2.25 0 0 1 1.591.66l5.383 5.382a2.25 2.25 0 0 1 0 3.182l-4.246 4.246a2.25 2.25 0 0 1-3.182 0L1.659 9.086A2.25 2.25 0 0 1 1 7.496zm3.293 2.043A1 1 0 0 1 5 4h.006a1 1 0 0 1 0 2H5a1 1 0 0 1-.707-1.707"
    />
  </svg>
)
export default SvgTag