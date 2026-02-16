import * as React from "react";
function ChartBarIcon({
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
    d: "M18 3a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m-6 6a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V10a1 1 0 0 1 1-1m-5 7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"
  }));
}
const ForwardRef = React.forwardRef(ChartBarIcon);
export default ForwardRef;