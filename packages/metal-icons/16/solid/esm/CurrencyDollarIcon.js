import * as React from "react";
function CurrencyDollarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "currentColor",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5.75a.75.75 0 0 0-1.5 0V2h-.594c-.9 0-1.766.353-2.405.985a3.36 3.36 0 0 0-.74 3.685c.171.41.422.783.739 1.095.64.632 1.506.985 2.406.985H7v3.75H4.25a.75.75 0 1 0 0 1.5H7v1.25a.75.75 0 1 0 1.5 0V14h1.094c.9 0 1.766-.353 2.405-.985A3.363 3.363 0 0 0 13 10.625a3.36 3.36 0 0 0-1-2.39 3.422 3.422 0 0 0-2.406-.985H8.5V3.5h3.25a.75.75 0 1 0 0-1.5H8.5zM7 3.5h-.594c-.508 0-.994.2-1.35.552A1.86 1.86 0 0 0 4.5 5.375c0 .494.199.97.555 1.323.357.352.843.552 1.351.552H7zm1.5 5.25v3.75h1.094c.508 0 .994-.2 1.35-.552a1.859 1.859 0 0 0 .556-1.323c0-.494-.199-.97-.555-1.323a1.922 1.922 0 0 0-1.351-.552z"
  }));
}
const ForwardRef = React.forwardRef(CurrencyDollarIcon);
export default ForwardRef;