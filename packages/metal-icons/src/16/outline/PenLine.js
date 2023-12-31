import * as React from 'react'
const SvgPenLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11.505.745a2.543 2.543 0 0 1 3.596 0l.154.154a2.543 2.543 0 0 1 0 3.596L4.867 14.884a.75.75 0 0 1-.349.197l-3.586.897a.75.75 0 0 1-.91-.91l.897-3.586a.75.75 0 0 1 .197-.349l8.966-8.965v-.001zm-.892 3.013-8.29 8.289-.542 2.172 2.172-.543 8.29-8.289zm1.959-1.96a1.03 1.03 0 0 1 1.456 0l.17.17a1.03 1.03 0 0 1 0 1.457l-.898.898-1.626-1.627z"
    />
    <path d="M8.75 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" />
  </svg>
)
export default SvgPenLine
