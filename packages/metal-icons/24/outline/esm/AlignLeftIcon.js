import * as React from "react";
function AlignLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M22 12a.75.75 0 0 1-.75.75H8.612l5.158 4.96a.75.75 0 1 1-1.04 1.08l-6.5-6.25a.75.75 0 0 1 0-1.08l6.5-6.25a.75.75 0 1 1 1.04 1.08l-5.158 4.96H21.25A.75.75 0 0 1 22 12M3.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 1 0 1.5 0z"
  }));
}
const ForwardRef = React.forwardRef(AlignLeftIcon);
export default ForwardRef;