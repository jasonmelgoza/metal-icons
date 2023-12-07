import * as React from 'react'
const SvgAlarm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.73 3.408A10.5 10.5 0 0 0 2.906 7.75L1.607 7A12 12 0 0 1 7.12 2.037zM12.5 7.75a.75.75 0 0 0-1.5 0v5.678l5.868 3.468a.75.75 0 0 0 .764-1.292L12.5 12.572z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 3a10 10 0 1 0 0 20 10 10 0 0 0 0-20M5.99 6.99a8.5 8.5 0 1 1 12.02 12.02A8.5 8.5 0 0 1 5.99 6.99"
    />
    <path
      fill="currentColor"
      d="M21.093 7.75a10.5 10.5 0 0 0-4.822-4.342l.61-1.37A12 12 0 0 1 22.392 7z"
    />
  </svg>
)
export default SvgAlarm
