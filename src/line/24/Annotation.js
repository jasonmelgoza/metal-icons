import * as React from 'react'
const SvgAnnotation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.031 16.5h5.219c.69 0 1.25-.56 1.25-1.25v-9.5c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v8.875c0 1.036.84 1.875 1.875 1.875h4.594L12 20.27l3.031-3.77ZM23 5.75A2.75 2.75 0 0 0 20.25 3H3.75A2.75 2.75 0 0 0 1 5.75v8.875A3.375 3.375 0 0 0 4.375 18H8.25l2.83 3.519a1.125 1.125 0 0 0 1.84 0L15.75 18h4.5A2.75 2.75 0 0 0 23 15.25v-9.5Z"
    />
  </svg>
)
export default SvgAnnotation
