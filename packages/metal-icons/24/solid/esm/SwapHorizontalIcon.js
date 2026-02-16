import * as React from "react";
function SwapHorizontalIcon({
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
    d: "M6.72 3.309a.75.75 0 0 0-1-1.118l-4.47 4a.75.75 0 0 0 0 1.118l4.47 4a.75.75 0 0 0 1-1.118L3.713 7.5H22.25a.75.75 0 0 0 0-1.5H3.713zm10.56 10.5a.75.75 0 1 1 1-1.118l4.47 4a.75.75 0 0 1 0 1.118l-4.47 4a.75.75 0 1 1-1-1.118L20.287 18H1.75a.75.75 0 0 1 0-1.5h18.537z"
  }));
}
const ForwardRef = React.forwardRef(SwapHorizontalIcon);
export default ForwardRef;