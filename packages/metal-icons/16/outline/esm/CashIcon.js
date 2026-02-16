import * as React from "react";
function CashIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 17,
    height: 16,
    fill: "currentColor",
    viewBox: "0 0 17 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M11.018 3.25a.75.75 0 0 0 1.5 0A2.25 2.25 0 0 0 10.268 1h-8a2.25 2.25 0 0 0-2.25 2.25V8a.75.75 0 0 0 1.5 0V3.25a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75m.75 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.768 5.5a2.25 2.25 0 0 0-2.25 2.25v5A2.25 2.25 0 0 0 5.768 15h8a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25zm-.75 7.25c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75v-5a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75z"
  }));
}
const ForwardRef = React.forwardRef(CashIcon);
export default ForwardRef;