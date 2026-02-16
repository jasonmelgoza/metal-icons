import * as React from "react";
function SwapVerticalIcon({
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
    d: "M20.691 6.72a.75.75 0 1 0 1.118-1l-4-4.47a.75.75 0 0 0-1.118 0l-4 4.47a.75.75 0 0 0 1.118 1L16.5 3.713V22.25a.75.75 0 0 0 1.5 0V3.713zm-10.5 10.56a.75.75 0 1 1 1.118 1l-4 4.47a.75.75 0 0 1-1.118 0l-4-4.47a.75.75 0 1 1 1.118-1L6 20.287V1.75a.75.75 0 0 1 1.5 0v18.537z",
    opacity: 0.9
  }));
}
const ForwardRef = React.forwardRef(SwapVerticalIcon);
export default ForwardRef;