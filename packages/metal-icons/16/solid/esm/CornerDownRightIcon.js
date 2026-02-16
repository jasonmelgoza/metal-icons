import * as React from "react";
function CornerDownRightIcon({
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
    d: "M2.5 2.75a.75.75 0 0 1 1.5 0v4.5A1.75 1.75 0 0 0 5.75 9h5.69L9.22 6.78a.75.75 0 0 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H5.75A3.25 3.25 0 0 1 2.5 7.25z"
  }));
}
const ForwardRef = React.forwardRef(CornerDownRightIcon);
export default ForwardRef;