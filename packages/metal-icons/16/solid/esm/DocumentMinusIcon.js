import * as React from "react";
function DocumentMinusIcon({
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
    d: "M3.25 0H9v5.25c0 .414.336.75.75.75H15v7.75A2.25 2.25 0 0 1 12.75 16h-9.5A2.25 2.25 0 0 1 1 13.75V2.25A2.25 2.25 0 0 1 3.25 0M6 10a.75.75 0 1 0 0 1.5h4a.75.75 0 1 0 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 4.5h4l-4-4z"
  }));
}
const ForwardRef = React.forwardRef(DocumentMinusIcon);
export default ForwardRef;