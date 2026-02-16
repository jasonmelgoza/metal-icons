import * as React from "react";
function CircleCaretLeftIcon({
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
    d: "M9.61 10.908a.75.75 0 0 1-.766-.027l-3.5-2.25a.75.75 0 0 1 0-1.262l3.5-2.25a.75.75 0 0 1 1.156.63v4.5a.75.75 0 0 1-.39.659"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8m-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
  }));
}
const ForwardRef = React.forwardRef(CircleCaretLeftIcon);
export default ForwardRef;