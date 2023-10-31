import * as React from 'react'
const SvgAnnotation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.75 1A2.25 2.25 0 0 1 15 3.25v6.5A2.25 2.25 0 0 1 12.75 12H10.5l-1.887 2.68a.75.75 0 0 1-1.226 0L5.5 12H3.25A2.25 2.25 0 0 1 1 9.75v-6.5A2.25 2.25 0 0 1 3.25 1h9.5Z"
    />
  </svg>
)
export default SvgAnnotation
