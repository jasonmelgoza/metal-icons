import * as React from "react";
function AnnotationIcon({
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
    fillRule: "evenodd",
    d: "M15.0314 16.5H20.25c.6904 0 1.25-.5596 1.25-1.25v-9.5c0-.69036-.5596-1.25-1.25-1.25H3.75c-.69036 0-1.25.55964-1.25 1.25v8.875c0 1.0355.83947 1.875 1.875 1.875h4.59351L12 20.2691zM23 5.75C23 4.23122 21.7688 3 20.25 3H3.75C2.23122 3 1 4.23122 1 5.75v8.875C1 16.489 2.51104 18 4.375 18h3.87499l2.83021 3.5189c.4481.6363 1.3915.6363 1.8396 0L15.7499 18H20.25c1.5188 0 2.75-1.2312 2.75-2.75z"
  }));
}
const ForwardRef = React.forwardRef(AnnotationIcon);
export default ForwardRef;