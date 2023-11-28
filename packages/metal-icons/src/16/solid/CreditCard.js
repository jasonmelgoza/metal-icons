import * as React from 'react'
const SvgCreditCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M0 4.25A2.25 2.25 0 0 1 2.25 2h11.5A2.25 2.25 0 0 1 16 4.25V5H0z" />
    <path
      fillRule="evenodd"
      d="M0 7v4.75A2.25 2.25 0 0 0 2.25 14h11.5A2.25 2.25 0 0 0 16 11.75V7zm3.75 2a.75.75 0 0 0 0 1.5h1.5a.75.75 0 1 0 0-1.5z"
    />
  </svg>
)
export default SvgCreditCard
