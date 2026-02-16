import * as React from "react";
function ChevronsUpIcon({
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
    d: "M5.3 7.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.749.749 0 1 1-1.1 1.02L8 4.852z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.3 12.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.748.748 0 0 1-.29 1.213.75.75 0 0 1-.81-.193L8 9.852z"
  }));
}
const ForwardRef = React.forwardRef(ChevronsUpIcon);
export default ForwardRef;