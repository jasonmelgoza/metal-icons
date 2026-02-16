import * as React from "react";
function ReloadIcon({
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
    d: "M7.248 1.307A.75.75 0 1 1 8.252.193l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 0 1-1.004-1.114l1.29-1.161a4.5 4.5 0 1 0 3.655 2.832.75.75 0 1 1 1.398-.546A6 6 0 1 1 8.018 2z"
  }));
}
const ForwardRef = React.forwardRef(ReloadIcon);
export default ForwardRef;