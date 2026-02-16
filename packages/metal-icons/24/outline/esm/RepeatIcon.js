import * as React from "react";
function RepeatIcon({
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
    d: "M17.515.455a.75.75 0 0 0-1.03 1.09L19.614 4.5H6.75A4.75 4.75 0 0 0 2 9.25v2a.75.75 0 1 0 1.5 0v-2A3.25 3.25 0 0 1 6.75 6h12.864l-3.129 2.955a.75.75 0 0 0 1.03 1.09l4.5-4.25a.751.751 0 0 0 0-1.09zm-9.47 13.53a.75.75 0 0 1-.03 1.06L4.886 18H17.25a3.25 3.25 0 0 0 3.25-3.25v-2a.75.75 0 1 1 1.5 0v2a4.75 4.75 0 0 1-4.75 4.75H4.886l3.129 2.955a.75.75 0 0 1-1.03 1.09l-4.5-4.25a.75.75 0 0 1 0-1.09l4.5-4.25a.75.75 0 0 1 1.06.03"
  }));
}
const ForwardRef = React.forwardRef(RepeatIcon);
export default ForwardRef;