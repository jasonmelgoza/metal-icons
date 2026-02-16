import * as React from "react";
function SparkleTextIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M2.75 3a.75.75 0 0 0 0 1.5h18.5a.75.75 0 1 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 1 0 0-1.5zM2 13.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75M2.75 18a.75.75 0 1 0 0 1.5h7.5a.75.75 0 1 0 0-1.5zM17 11a.5.5 0 0 1 .475.344l.957 2.909a.501.501 0 0 0 .322.321h.002l2.9.95a.5.5 0 0 1 0 .951l-2.909.957a.501.501 0 0 0-.321.322v.002l-.95 2.9a.5.5 0 0 1-.951 0l-.957-2.909a.501.501 0 0 0-.322-.321h-.002l-2.9-.95a.5.5 0 0 1 0-.951l2.909-.957a.501.501 0 0 0 .321-.322v-.002l.95-2.9A.5.5 0 0 1 17 11"
  }));
}
const ForwardRef = React.forwardRef(SparkleTextIcon);
export default ForwardRef;