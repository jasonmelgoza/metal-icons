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
      fillRule="evenodd"
      d="M9.722 10.5h3.028a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h3.028L8 12.945 9.722 10.5ZM10.5 12h2.25A2.25 2.25 0 0 0 15 9.75v-6.5A2.25 2.25 0 0 0 12.75 1h-9.5A2.25 2.25 0 0 0 1 3.25v6.5A2.25 2.25 0 0 0 3.25 12H5.5l1.887 2.68a.75.75 0 0 0 1.226 0L10.5 12Z"
    />
  </svg>
)
export default SvgAnnotation
