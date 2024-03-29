import * as React from 'react'
const SvgHeart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0 6.173C0 3.619 1.934.725 5.02.725c1.349 0 2.332.689 2.98 1.315.648-.626 1.631-1.315 2.98-1.315C14.067.725 16 3.619 16 6.173c0 1.344-.52 2.585-1.242 3.66s-1.671 2.028-2.601 2.812a22 22 0 0 1-2.575 1.859 18 18 0 0 1-.877.51 7 7 0 0 1-.382.191 1 1 0 0 1-.139.047.8.8 0 0 1-.184.023c-.093 0-.165-.018-.184-.022a1 1 0 0 1-.139-.048 7 7 0 0 1-.382-.191c-.22-.119-.522-.291-.877-.51a22 22 0 0 1-2.575-1.86c-.93-.783-1.88-1.735-2.601-2.811S0 7.517 0 6.173"
    />
  </svg>
)
export default SvgHeart
