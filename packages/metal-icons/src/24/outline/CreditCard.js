import * as React from 'react'
const SvgCreditCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M4.75 15a.75.75 0 1 0 0 1.5h2.5a.75.75 0 1 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M0 5.75A2.75 2.75 0 0 1 2.75 3h18.5A2.75 2.75 0 0 1 24 5.75v12.5A2.75 2.75 0 0 1 21.25 21H2.75A2.75 2.75 0 0 1 0 18.25zm22.5 0V8h-21V5.75c0-.69.56-1.25 1.25-1.25h18.5c.69 0 1.25.56 1.25 1.25m0 5.25h-21v7.25c0 .69.56 1.25 1.25 1.25h18.5c.69 0 1.25-.56 1.25-1.25z"
    />
  </svg>
)
export default SvgCreditCard
