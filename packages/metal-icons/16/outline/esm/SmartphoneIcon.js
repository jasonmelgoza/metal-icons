import * as React from "react";
function SmartphoneIcon({
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
    d: "M7.293 11.293A1 1 0 0 1 8 11h.007a1 1 0 0 1 0 2H8a1 1 0 0 1-.707-1.707"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.659.659A2.25 2.25 0 0 1 4.25 0h7.5A2.25 2.25 0 0 1 14 2.25v11.5A2.25 2.25 0 0 1 11.75 16h-7.5A2.25 2.25 0 0 1 2 13.75V2.25c0-.597.237-1.169.659-1.591m1.06 1.06a.75.75 0 0 0-.219.531v11.5a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75V2.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.53.22Z"
  }));
}
const ForwardRef = React.forwardRef(SmartphoneIcon);
export default ForwardRef;