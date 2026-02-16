import * as React from "react";
function FilterIcon({
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
    fillRule: "evenodd",
    d: "M14.707 4.707A1 1 0 0 0 15 4V2.25A2.25 2.25 0 0 0 12.75 0h-9.5A2.25 2.25 0 0 0 1 2.25V4a1 1 0 0 0 .293.707L6 9.414V15a1 1 0 0 0 1.707.707l2-2A1 1 0 0 0 10 13V9.414zM8.5 12.793v-4l5-5V2.25a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0-.75.75v1.543l5 5v5zm5.146-9.147"
  }));
}
const ForwardRef = React.forwardRef(FilterIcon);
export default ForwardRef;