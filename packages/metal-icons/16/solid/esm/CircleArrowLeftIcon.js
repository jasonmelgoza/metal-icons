import * as React from "react";
function CircleArrowLeftIcon({
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
    d: "M2.343 2.343a8 8 0 1 0 11.314 11.314A8 8 0 0 0 2.343 2.343M7.93 4.93a.75.75 0 0 0-1.234-.184L4.197 7.494A.744.744 0 0 0 4 7.999v.004c0 .186.07.365.196.502l2.499 2.75a.75.75 0 1 0 1.11-1.01L6.445 8.75h4.805a.75.75 0 1 0 0-1.5H6.445l1.36-1.495a.75.75 0 0 0 .124-.825Z"
  }));
}
const ForwardRef = React.forwardRef(CircleArrowLeftIcon);
export default ForwardRef;