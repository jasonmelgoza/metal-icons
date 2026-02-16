import * as React from "react";
function ArrowDownIcon({
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
    d: "M8.5 2.75a.75.75 0 1 0-1.5 0v8.614L4.045 8.235a.75.75 0 0 0-1.09 1.03l4.248 4.498a.747.747 0 0 0 .535.236L7.75 14h.012a.747.747 0 0 0 .533-.235l4.25-4.5a.75.75 0 0 0-1.09-1.03L8.5 11.364z"
  }));
}
const ForwardRef = React.forwardRef(ArrowDownIcon);
export default ForwardRef;