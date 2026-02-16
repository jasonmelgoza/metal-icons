import * as React from "react";
function ReloadIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M11.24 1.3A.75.75 0 1 1 12.26.2l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.217-2.06a7.5 7.5 0 1 0 5.532 4.633.752.752 0 0 1 .713-1.03.75.75 0 0 1 .684.484 9 9 0 1 1-7.237-5.654z"
  }));
}
const ForwardRef = React.forwardRef(ReloadIcon);
export default ForwardRef;