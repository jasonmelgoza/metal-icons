import * as React from 'react'
const SvgShieldAlert = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M12 7a.75.75 0 0 1 .75.75v4.5a.75.75 0 1 1-1.5 0v-4.5A.75.75 0 0 1 12 7m0 8a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2z" />
    <path
      fillRule="evenodd"
      d="M11.04 1.307c.62-.23 1.3-.23 1.92 0l6.25 2.33A2.75 2.75 0 0 1 21 6.214V12c0 2.732-1.462 5.038-3.104 6.774-1.65 1.744-3.562 3-4.65 3.642a2.44 2.44 0 0 1-2.493 0c-1.087-.643-3-1.898-4.65-3.642C4.463 17.038 3 14.732 3 12V6.214a2.75 2.75 0 0 1 1.79-2.577zm1.397 1.406a1.25 1.25 0 0 0-.874 0l-6.25 2.33a1.25 1.25 0 0 0-.813 1.17V12c0 2.182 1.172 4.136 2.693 5.744 1.514 1.6 3.294 2.772 4.323 3.38.304.18.664.18.968 0 1.03-.608 2.809-1.78 4.323-3.38C18.327 16.136 19.5 14.182 19.5 12V6.214a1.25 1.25 0 0 0-.813-1.171z"
    />
  </svg>
)
export default SvgShieldAlert
