import * as React from "react";
function CircleCaretUpIcon({
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
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M5.092 9.61a.75.75 0 0 1 .027-.766l2.25-3.5a.75.75 0 0 1 1.262 0l2.25 3.5A.75.75 0 0 1 10.25 10h-4.5a.75.75 0 0 1-.658-.39"
  }));
}
const ForwardRef = React.forwardRef(CircleCaretUpIcon);
export default ForwardRef;