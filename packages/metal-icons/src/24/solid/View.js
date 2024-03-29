import * as React from 'react'
const SvgView = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3.15 7.162C5.14 5.088 8.135 3 12 3s6.86 2.088 8.851 4.162a18 18 0 0 1 2.285 2.936c.259.417.46.785.599 1.074q.095.19.17.388.033.087.058.177c.012.047.037.147.037.263s-.025.216-.037.263q-.025.09-.058.177c-.042.113-.1.245-.169.388-.14.289-.34.657-.6 1.074a18 18 0 0 1-2.286 2.936C18.86 18.912 15.864 21 12 21c-3.865 0-6.86-2.088-8.851-4.162a18 18 0 0 1-2.285-2.936 12 12 0 0 1-.599-1.074 4 4 0 0 1-.17-.388 2 2 0 0 1-.058-.177A1 1 0 0 1 0 12q0-.134.037-.263.025-.09.058-.177.064-.171.169-.388c.14-.289.34-.657.6-1.074A18 18 0 0 1 3.15 7.162m6.022 2.01a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656"
    />
  </svg>
)
export default SvgView
