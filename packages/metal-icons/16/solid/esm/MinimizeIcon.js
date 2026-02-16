import * as React from "react";
function MinimizeIcon({
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
    d: "M10 4.94V2.75a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 1 0 0-1.5h-2.19l2.72-2.72a.75.75 0 0 0-1.06-1.06zM2.75 8.5a.75.75 0 0 0 0 1.5h2.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06L6 11.06v2.19a.75.75 0 1 0 1.5 0v-4a.75.75 0 0 0-.75-.75z"
  }));
}
const ForwardRef = React.forwardRef(MinimizeIcon);
export default ForwardRef;