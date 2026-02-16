import * as React from "react";
function MoreAltIcon({
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
    d: "M8 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
  }));
}
const ForwardRef = React.forwardRef(MoreAltIcon);
export default ForwardRef;