import * as React from "react";
function CreditCardIcon({
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
    d: "M0 5.75A2.75 2.75 0 0 1 2.75 3h18.5A2.75 2.75 0 0 1 24 5.75V8H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M0 11v7.25A2.75 2.75 0 0 0 2.75 21h18.5A2.75 2.75 0 0 0 24 18.25V11zm4.75 4a.75.75 0 1 0 0 1.5h2.5a.75.75 0 1 0 0-1.5z"
  }));
}
const ForwardRef = React.forwardRef(CreditCardIcon);
export default ForwardRef;