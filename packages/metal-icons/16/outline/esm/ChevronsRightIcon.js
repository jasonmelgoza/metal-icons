import * as React from "react";
function ChevronsRightIcon({
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
    d: "M3.24 5.3a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1L6.148 8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.24 5.3a.75.75 0 0 1 1.02-1.1l3.5 3.25a.749.749 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1L11.148 8z"
  }));
}
const ForwardRef = React.forwardRef(ChevronsRightIcon);
export default ForwardRef;