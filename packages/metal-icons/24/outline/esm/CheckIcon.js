import * as React from "react";
function CheckIcon({
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
    d: "M21.78 6.28a.75.75 0 0 0-1.06-1.06L8.75 17.19l-5.47-5.47a.75.75 0 0 0-1.06 1.06l6 6a.75.75 0 0 0 1.06 0z"
  }));
}
const ForwardRef = React.forwardRef(CheckIcon);
export default ForwardRef;