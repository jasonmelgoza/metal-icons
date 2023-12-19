import * as React from 'react'
const SvgGrid = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2.25 1C1.56 1 1 1.56 1 2.25v3.5C1 6.44 1.56 7 2.25 7h3.5C6.44 7 7 6.44 7 5.75v-3.5C7 1.56 6.44 1 5.75 1zm8 0C9.56 1 9 1.56 9 2.25v3.5C9 6.44 9.56 7 10.25 7h3.5C14.44 7 15 6.44 15 5.75v-3.5C15 1.56 14.44 1 13.75 1zM9 10.25C9 9.56 9.56 9 10.25 9h3.5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5C9.56 15 9 14.44 9 13.75zM2.25 9C1.56 9 1 9.56 1 10.25v3.5c0 .69.56 1.25 1.25 1.25h3.5C6.44 15 7 14.44 7 13.75v-3.5C7 9.56 6.44 9 5.75 9z"
    />
  </svg>
)
export default SvgGrid
