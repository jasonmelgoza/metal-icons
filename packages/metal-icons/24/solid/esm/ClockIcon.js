import * as React from "react";
function ClockIcon({
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
    d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11.5-6.25a.75.75 0 1 0-1.5 0V12c0 .284.16.544.415.67l4.5 2.25a.749.749 0 0 0 .916-1.165.75.75 0 0 0-.246-.175L12.5 11.536z"
  }));
}
const ForwardRef = React.forwardRef(ClockIcon);
export default ForwardRef;