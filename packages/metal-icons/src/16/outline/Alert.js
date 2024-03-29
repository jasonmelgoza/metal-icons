import * as React from 'react'
const SvgAlert = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7 11a1 1 0 0 1 1-1h.007a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1m1.75-5.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.953 1.273a2.143 2.143 0 0 1 2.874.751l.002.004 5.884 9.774a2.126 2.126 0 0 1-.768 2.905 2.15 2.15 0 0 1-1.06.293H2.115a2.14 2.14 0 0 1-1.833-1.074 2.13 2.13 0 0 1 .006-2.124l.006-.01 5.878-9.764.002-.004c.191-.313.46-.571.78-.75zm.502 1.53-.001.002-5.872 9.754a.626.626 0 0 0 .231.853.64.64 0 0 0 .314.088h11.746a.64.64 0 0 0 .544-.32.63.63 0 0 0 0-.62l-5.87-9.755-.002-.001a.635.635 0 0 0-.857-.223.64.64 0 0 0-.233.222"
    />
  </svg>
)
export default SvgAlert
