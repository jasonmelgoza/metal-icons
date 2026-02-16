import * as React from "react";
function ArrowRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M8.235 4.045a.75.75 0 1 1 1.03-1.09l4.5 4.25a.751.751 0 0 1 0 1.09l-4.5 4.25a.75.75 0 0 1-1.03-1.09L11.364 8.5H2.75a.75.75 0 0 1 0-1.5h8.614z"
  }));
}
const ForwardRef = React.forwardRef(ArrowRightIcon);
export default ForwardRef;