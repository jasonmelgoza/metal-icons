import * as React from "react";
function SlashIcon({
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
    d: "M11.126 2.601a.75.75 0 0 0-1.025.273l-5.5 9.5a.75.75 0 1 0 1.298.752l5.5-9.5a.75.75 0 0 0-.273-1.025"
  }));
}
const ForwardRef = React.forwardRef(SlashIcon);
export default ForwardRef;