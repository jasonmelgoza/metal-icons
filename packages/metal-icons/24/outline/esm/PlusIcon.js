import * as React from "react";
function PlusIcon({
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
    d: "M13 5a.75.75 0 1 0-1.5 0v6.5H5A.75.75 0 1 0 5 13h6.5v6.5a.75.75 0 1 0 1.5 0V13h6.5a.75.75 0 1 0 0-1.5H13z"
  }));
}
const ForwardRef = React.forwardRef(PlusIcon);
export default ForwardRef;