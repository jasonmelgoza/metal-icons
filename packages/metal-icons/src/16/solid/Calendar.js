import * as React from 'react'
const SvgCalendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M11.28.22c.141.14.22.331.22.53V1h1.25A2.25 2.25 0 0 1 15 3.25V5H1V3.25A2.25 2.25 0 0 1 3.25 1H4.5V.75a.75.75 0 0 1 1.5 0V1h4V.75a.75.75 0 0 1 1.28-.53M1 6.5v6.25A2.25 2.25 0 0 0 3.25 15h9.5A2.25 2.25 0 0 0 15 12.75V6.5z" />
  </svg>
)
export default SvgCalendar
