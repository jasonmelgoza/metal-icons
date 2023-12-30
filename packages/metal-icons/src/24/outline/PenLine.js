import * as React from 'react'
const SvgPenLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M17.174 1.962a3.285 3.285 0 0 1 4.646 0l.218.218a3.286 3.286 0 0 1 0 4.646L7.351 21.513a.75.75 0 0 1-.348.197l-5.071 1.268a.75.75 0 0 1-.91-.91l1.268-5.07a.75.75 0 0 1 .197-.349zm-1.48 3.601-12 12-.913 3.656 3.656-.914 12-12zm5.283.202a1.786 1.786 0 0 0 0-2.524l-.218-.218a1.785 1.785 0 0 0-2.524 0l-1.48 1.48L19.5 7.25z"
    />
    <path d="M10.75 21.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" />
  </svg>
)
export default SvgPenLine
