import * as React from "react";
function CircleArrowRightIcon({
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
    d: "M2.343 2.343a8 8 0 1 0 11.314 11.314A8 8 0 0 0 2.343 2.343m5.728 2.588a.75.75 0 0 1 1.234-.186l2.5 2.75a.75.75 0 0 1 0 1.01l-2.5 2.75a.75.75 0 1 1-1.11-1.01l1.36-1.495H4.75a.75.75 0 0 1 0-1.5h4.805l-1.36-1.495a.75.75 0 0 1-.124-.824"
  }));
}
const ForwardRef = React.forwardRef(CircleArrowRightIcon);
export default ForwardRef;