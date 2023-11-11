import * as React from 'react'
const SvgBell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M20 14.15c0 1.304 1.019 2.35 2.25 2.35a.75.75 0 1 1 0 1.5H1.75a.75.75 0 1 1 0-1.5C2.981 16.5 4 15.454 4 14.15V8.983C4 4.665 7.702 1 12 1s8 3.665 8 7.983v5.167Z"
    />
    <path d="M10.42 20.414a.75.75 0 0 0-1.34.672C9.63 22.188 10.703 23 12 23c1.296 0 2.369-.812 2.92-1.914a.75.75 0 1 0-1.34-.672c-.347.691-.953 1.086-1.58 1.086-.627 0-1.233-.395-1.58-1.086Z" />
  </svg>
)
export default SvgBell
