import * as React from 'react'
const SvgBell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M13 8.78c0 1.334.788 1.72 1.25 1.72a.75.75 0 1 1 0 1.5H1.75a.75.75 0 1 1 0-1.5c.462 0 1.25-.386 1.25-1.72V6.405C3 3.665 4.907 1 8 1s5 2.665 5 5.405z"
    />
    <path d="M6.898 12.872a.75.75 0 1 0-1.296.756A2.773 2.773 0 0 0 8 15c1.023 0 1.918-.55 2.398-1.372a.75.75 0 1 0-1.296-.756c-.219.374-.63.628-1.102.628-.473 0-.883-.254-1.102-.628" />
  </svg>
)
export default SvgBell
