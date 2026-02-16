import * as React from "react";
function CircleMinusIcon({
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
    d: "M2.343 2.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 2.343 2.343M4.22 7.47a.75.75 0 0 1 .53-.22h6.5a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 0 1-.53-1.28"
  }));
}
const ForwardRef = React.forwardRef(CircleMinusIcon);
export default ForwardRef;