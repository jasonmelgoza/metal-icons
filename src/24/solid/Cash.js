import * as React from 'react'
const SvgCash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M1 5.75A2.75 2.75 0 0 1 3.75 3h10.5A2.75 2.75 0 0 1 17 5.75V7.5H9.75a4.25 4.25 0 0 0-4.25 4.25V15H3.75A2.75 2.75 0 0 1 1 12.25v-6.5Z" />
    <path
      fillRule="evenodd"
      d="M7 11.75A2.75 2.75 0 0 1 9.75 9h10.5A2.75 2.75 0 0 1 23 11.75v6.5A2.75 2.75 0 0 1 20.25 21H9.75A2.75 2.75 0 0 1 7 18.25v-6.5ZM17.5 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  </svg>
)
export default SvgCash
