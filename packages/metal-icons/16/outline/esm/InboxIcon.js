import * as React from "react";
function InboxIcon({
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
    d: "M2.75 1.5c-.69 0-1.25.56-1.25 1.25V8H3a.75.75 0 0 1 .53.22L6.31 11h3.38l2.78-2.78A.75.75 0 0 1 13 8h1.5V2.75c0-.69-.56-1.25-1.25-1.25zM16 2.75A2.75 2.75 0 0 0 13.25 0H2.75A2.75 2.75 0 0 0 0 2.75v10.5A2.75 2.75 0 0 0 2.75 16h10.5A2.75 2.75 0 0 0 16 13.25zM14.5 9.5h-1.19l-2.78 2.78a.75.75 0 0 1-.53.22H6a.75.75 0 0 1-.53-.22L2.69 9.5H1.5v3.75c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25z"
  }));
}
const ForwardRef = React.forwardRef(InboxIcon);
export default ForwardRef;