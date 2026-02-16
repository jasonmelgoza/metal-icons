import * as React from "react";
function DocumentIcon({
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
    d: "M5.75 1A2.75 2.75 0 0 0 3 3.75v16.5A2.75 2.75 0 0 0 5.75 23h12.5A2.75 2.75 0 0 0 21 20.25V9h-7.25a.75.75 0 0 1-.75-.75V1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 1.5v6h6a1.056 1.056 0 0 0-.013-.013l-5.974-5.974A2.934 2.934 0 0 0 14.5 1.5"
  }));
}
const ForwardRef = React.forwardRef(DocumentIcon);
export default ForwardRef;