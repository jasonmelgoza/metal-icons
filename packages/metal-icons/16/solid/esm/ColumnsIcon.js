import * as React from "react";
function ColumnsIcon({
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
    d: "M2.75 1A1.75 1.75 0 0 0 1 2.75v10.5c0 .967.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 7 13.25V2.75A1.75 1.75 0 0 0 5.25 1zm8 0A1.75 1.75 0 0 0 9 2.75v10.5c0 .967.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 15 13.25V2.75A1.75 1.75 0 0 0 13.25 1z"
  }));
}
const ForwardRef = React.forwardRef(ColumnsIcon);
export default ForwardRef;