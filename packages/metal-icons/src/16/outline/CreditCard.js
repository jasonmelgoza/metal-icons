import * as React from 'react'
const SvgCreditCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M3.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 1 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M0 4.25A2.25 2.25 0 0 1 2.25 2h11.5A2.25 2.25 0 0 1 16 4.25v7.5A2.25 2.25 0 0 1 13.75 14H2.25A2.25 2.25 0 0 1 0 11.75zm14.5 0V5h-13v-.75a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75m0 2.75h-13v4.75c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75z"
    />
  </svg>
)
export default SvgCreditCard
