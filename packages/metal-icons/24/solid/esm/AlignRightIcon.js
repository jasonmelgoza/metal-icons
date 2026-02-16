import * as React from "react";
function AlignRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M2 12a.75.75 0 0 1 .75-.75h12.638L10.23 6.29a.75.75 0 1 1 1.04-1.08l6.5 6.25a.751.751 0 0 1 0 1.08l-6.5 6.25a.75.75 0 1 1-1.04-1.08l5.158-4.96H2.75A.75.75 0 0 1 2 12m18.5 8.25a.75.75 0 1 0 1.5 0V3.75a.75.75 0 1 0-1.5 0z"
  }));
}
const ForwardRef = React.forwardRef(AlignRightIcon);
export default ForwardRef;