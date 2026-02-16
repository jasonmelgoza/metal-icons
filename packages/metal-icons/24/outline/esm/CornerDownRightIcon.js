import * as React from "react";
function CornerDownRightIcon({
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
    d: "M2.5 3.75a.75.75 0 0 1 1.5 0v7c0 .847.357 1.669 1.009 2.282A3.64 3.64 0 0 0 7.5 14h10.878l-4.146-3.957a.75.75 0 1 1 1.036-1.086l5.498 5.25a.75.75 0 0 1 .002 1.085l-5.5 5.25a.75.75 0 1 1-1.036-1.085l4.146-3.957H7.5a5.139 5.139 0 0 1-3.52-1.375A4.634 4.634 0 0 1 2.5 10.75z"
  }));
}
const ForwardRef = React.forwardRef(CornerDownRightIcon);
export default ForwardRef;