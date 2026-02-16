import * as React from "react";
function AlignTopIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M7.75 15a.75.75 0 0 1-.75-.75V6.636L4.045 9.765a.75.75 0 0 1-1.09-1.03l4.25-4.5A.747.747 0 0 1 7.738 4h.024c.19.003.373.078.51.211l.004.005a.857.857 0 0 1 .02.02l4.25 4.499a.751.751 0 0 1-1.091 1.03L8.5 6.636v7.614a.75.75 0 0 1-.75.75M13 2.5A.75.75 0 1 0 13 1H2.5a.75.75 0 0 0 0 1.5z"
  }));
}
const ForwardRef = React.forwardRef(AlignTopIcon);
export default ForwardRef;