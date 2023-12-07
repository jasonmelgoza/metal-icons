import * as React from 'react'
const SvgBattery = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.805 5.805A2.75 2.75 0 0 1 3.75 5h14.5A2.75 2.75 0 0 1 21 7.75v8.5A2.75 2.75 0 0 1 18.25 19H3.75A2.75 2.75 0 0 1 1 16.25v-8.5c0-.73.29-1.429.805-1.945"
    />
    <path
      fill="currentColor"
      d="M23.28 10.22c.141.14.22.331.22.53v2.5a.75.75 0 1 1-1.5 0v-2.5a.75.75 0 0 1 1.28-.53"
    />
  </svg>
)
export default SvgBattery
