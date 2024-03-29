import * as React from 'react'
const SvgLock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M12 16.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75" />
    <path
      fillRule="evenodd"
      d="M6 10.104V6.75c0-1.537.641-3.003 1.77-4.079A6.14 6.14 0 0 1 12 1c1.58 0 3.102.597 4.23 1.671A5.63 5.63 0 0 1 18 6.75v3.354a2.75 2.75 0 0 1 2 2.646v7.5A2.75 2.75 0 0 1 17.25 23H6.75A2.75 2.75 0 0 1 4 20.25v-7.5a2.75 2.75 0 0 1 2-2.646m2.805-6.346A4.64 4.64 0 0 1 12 2.5c1.205 0 2.354.456 3.195 1.258.84.8 1.305 1.877 1.305 2.992V10h-9V6.75c0-1.115.465-2.192 1.305-2.992M17.25 11.5H6.75c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-7.5c0-.69-.56-1.25-1.25-1.25"
    />
  </svg>
)
export default SvgLock
