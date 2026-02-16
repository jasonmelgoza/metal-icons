import * as React from "react";
function SlashIcon({
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
    fillRule: "evenodd",
    d: "M16.63 4.103a.75.75 0 0 0-1.027.268l-8.5 14.5a.75.75 0 1 0 1.294.758l8.5-14.5a.75.75 0 0 0-.267-1.026"
  }));
}
const ForwardRef = React.forwardRef(SlashIcon);
export default ForwardRef;