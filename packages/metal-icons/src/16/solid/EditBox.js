import * as React from 'react'
const SvgEditBox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M13.84 0c-.543 0-1.064.216-1.448.6l-1.03 1.03-6.493 6.493a.75.75 0 0 0-.197.348l-.65 2.597a.75.75 0 0 0 .91.91l2.597-.65a.75.75 0 0 0 .349-.197L15.4 3.608a2.05 2.05 0 0 0 0-2.896L15.288.6A2.05 2.05 0 0 0 13.84 0"
    />
    <path d="M1.72 3.72a.75.75 0 0 1 .53-.22h3a.75.75 0 0 0 0-1.5h-3A2.25 2.25 0 0 0 0 4.25v9.5A2.25 2.25 0 0 0 2.25 16h9.5A2.25 2.25 0 0 0 14 13.75v-4a.75.75 0 1 0-1.5 0v4a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .22-.53" />
  </svg>
)
export default SvgEditBox
