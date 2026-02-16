import * as React from "react";
function LayoutColumnsIcon({
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
    d: "M20.25 22A2.75 2.75 0 0 0 23 19.25V4.75A2.75 2.75 0 0 0 20.25 2H17v20zm-4.75 0V2h-7v20zM3.25 2H7v20H3.25A2.25 2.25 0 0 1 1 19.75V4.25A2.25 2.25 0 0 1 3.25 2"
  }));
}
const ForwardRef = React.forwardRef(LayoutColumnsIcon);
export default ForwardRef;