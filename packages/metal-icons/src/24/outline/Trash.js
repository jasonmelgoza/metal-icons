import * as React from 'react'
const SvgTrash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M9.75 9a.75.75 0 0 1 .75.75v8.5a.75.75 0 1 1-1.5 0v-8.5A.75.75 0 0 1 9.75 9m5.25.75a.75.75 0 1 0-1.5 0v8.5a.75.75 0 1 0 1.5 0z" />
    <path
      fillRule="evenodd"
      d="M7 5V3.75A2.75 2.75 0 0 1 9.75 1h4.5A2.75 2.75 0 0 1 17 3.75V5h4.25a.75.75 0 1 1 0 1.5H20v13.75A2.75 2.75 0 0 1 17.25 23H6.75A2.75 2.75 0 0 1 4 20.25V6.5H2.75a.75.75 0 0 1 0-1.5zm1.5-1.25c0-.69.56-1.25 1.25-1.25h4.5c.69 0 1.25.56 1.25 1.25V5h-7zm-3 2.75v13.75c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V6.5z"
    />
  </svg>
)
export default SvgTrash
