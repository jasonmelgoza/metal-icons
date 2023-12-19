import * as React from 'react'
const SvgLayers = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M7.656.084a.75.75 0 0 1 .69 0l7.25 3.75a.75.75 0 0 1 0 1.332l-7.25 3.75a.75.75 0 0 1-.69 0l-7.25-3.75a.75.75 0 0 1 0-1.332z"
    />
    <path d="M.093 10.887a.752.752 0 0 1 1.02-.294L8 14.393l6.888-3.8a.75.75 0 1 1 .724 1.313l-7.25 4a.75.75 0 0 1-.724 0l-7.25-4a.75.75 0 0 1-.295-1.019" />
    <path d="M.55 7.042a.75.75 0 0 1 .562.051L8 10.893l6.888-3.8a.75.75 0 0 1 .724 1.313l-7.25 4a.75.75 0 0 1-.724 0l-7.25-4A.75.75 0 0 1 .55 7.042" />
  </svg>
)
export default SvgLayers
