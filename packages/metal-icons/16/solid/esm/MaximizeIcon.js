import * as React from "react";
function MaximizeIcon({
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
    d: "M10.083 2.5a.75.75 0 0 1 0-1.5h4.167a.75.75 0 0 1 .75.75v4.167a.75.75 0 0 1-1.5 0V3.56l-3.234 3.233a.75.75 0 1 1-1.06-1.06L12.439 2.5zM6.794 9.206a.75.75 0 0 1 0 1.06L3.561 13.5h2.356a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75v-4.167a.75.75 0 0 1 1.5 0v2.356l3.234-3.233a.75.75 0 0 1 1.06 0"
  }));
}
const ForwardRef = React.forwardRef(MaximizeIcon);
export default ForwardRef;