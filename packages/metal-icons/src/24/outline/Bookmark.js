import * as React from 'react'
const SvgBookmark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75v16.376a1 1 0 0 1-1.382.924l-6.522-2.699a.25.25 0 0 0-.192 0L5.382 22.05A1 1 0 0 1 4 21.126zM6.75 3.5c-.69 0-1.25.56-1.25 1.25v15.628l5.83-2.413a1.75 1.75 0 0 1 1.34 0l5.83 2.413V4.75c0-.69-.56-1.25-1.25-1.25z"
    />
  </svg>
)
export default SvgBookmark
