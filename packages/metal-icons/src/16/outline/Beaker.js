import * as React from 'react'
const SvgBeaker = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.608 2H3.75a.75.75 0 1 0 0 1.5h.394l.987 2.154c.03.065.03.14 0 .205l-2.948 6.685A1.75 1.75 0 0 0 3.783 15h8.433a1.75 1.75 0 0 0 1.6-2.456l-2.948-6.685a.25.25 0 0 1 0-.205l.988-2.154h.394a.75.75 0 1 0 0-1.5zm5.598 1.5H5.794l.7 1.529c.209.455.213.977.01 1.435L5.828 8h4.346l-.678-1.536a1.75 1.75 0 0 1 .01-1.435zm-6.65 9.65 1.61-3.65h5.669l1.61 3.65a.25.25 0 0 1-.23.35h-8.43a.25.25 0 0 1-.23-.35Z"
    />
  </svg>
)
export default SvgBeaker
