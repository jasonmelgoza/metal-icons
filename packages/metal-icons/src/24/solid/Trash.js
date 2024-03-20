import * as React from 'react'
const SvgTrash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M7 3.75V5H2.75a.75.75 0 0 0 0 1.5H4v13.75A2.75 2.75 0 0 0 6.75 23h10.5A2.75 2.75 0 0 0 20 20.25V6.5h1.25a.75.75 0 1 0 0-1.5H17V3.75A2.75 2.75 0 0 0 14.25 1h-4.5A2.75 2.75 0 0 0 7 3.75M9.75 2.5c-.69 0-1.25.56-1.25 1.25V5h7V3.75c0-.69-.56-1.25-1.25-1.25zm.53 6.72A.75.75 0 0 0 9 9.75v8.5a.75.75 0 1 0 1.5 0v-8.5a.75.75 0 0 0-.22-.53m4.5 0c.141.14.22.331.22.53v8.5a.75.75 0 1 1-1.5 0v-8.5a.75.75 0 0 1 1.28-.53"
    />
  </svg>
)
export default SvgTrash
