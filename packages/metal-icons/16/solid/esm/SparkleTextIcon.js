import * as React from "react";
function SparkleTextIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M1.75 1a.75.75 0 0 0 0 1.5h12.5a.75.75 0 1 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h12.5a.75.75 0 1 0 0-1.5zM1 9.75A.75.75 0 0 1 1.75 9h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 1 9.75M1.75 13a.75.75 0 1 0 0 1.5h4.5a.75.75 0 1 0 0-1.5zm9.75-5a.75.75 0 0 1 .713.516l.563 1.712 1.707.56a.75.75 0 0 1 .001 1.425l-1.712.563-.56 1.707a.75.75 0 0 1-1.425.001l-.563-1.712-1.707-.56a.75.75 0 0 1-.001-1.425l1.712-.563.56-1.707a.75.75 0 0 1 .71-.517Z"
  }));
}
const ForwardRef = React.forwardRef(SparkleTextIcon);
export default ForwardRef;