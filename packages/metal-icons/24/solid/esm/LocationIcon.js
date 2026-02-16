import * as React from "react";
function LocationIcon({
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
    d: "M21.78 2.22a.75.75 0 0 1 .148.851l-8.763 18.5a.75.75 0 0 1-1.406-.14L9.921 14.08l-7.353-1.838a.75.75 0 0 1-.14-1.406l18.5-8.763a.75.75 0 0 1 .852.147"
  }));
}
const ForwardRef = React.forwardRef(LocationIcon);
export default ForwardRef;