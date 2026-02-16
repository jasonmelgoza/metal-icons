import * as React from "react";
function ChevronsDownIcon({
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
    d: "M5.3 3.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02L8 6.148z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.3 8.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.752.752 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02L8 11.148z"
  }));
}
const ForwardRef = React.forwardRef(ChevronsDownIcon);
export default ForwardRef;