import * as React from 'react'
const SvgCash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M0 3.25A2.25 2.25 0 0 1 2.25 1h8a2.25 2.25 0 0 1 2.25 2.25V4H5.75A3.75 3.75 0 0 0 2 7.75v2.736A2.25 2.25 0 0 1 0 8.25z" />
    <path
      fillRule="evenodd"
      d="M5.75 5.5A2.25 2.25 0 0 0 3.5 7.75v5A2.25 2.25 0 0 0 5.75 15h8A2.25 2.25 0 0 0 16 12.75v-5a2.25 2.25 0 0 0-2.25-2.25zm4 6.75a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
)
export default SvgCash
