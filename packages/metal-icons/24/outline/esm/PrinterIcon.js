import * as React from "react";
function PrinterIcon({
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
    d: "M6.7 10.95a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.25 1A2.75 2.75 0 0 1 19 3.75V8h1.25A2.75 2.75 0 0 1 23 10.75v5.5A2.75 2.75 0 0 1 20.25 19H19v2.25A1.75 1.75 0 0 1 17.25 23H6.75A1.75 1.75 0 0 1 5 21.25V19H3.75A2.75 2.75 0 0 1 1 16.25v-5.5A2.75 2.75 0 0 1 3.75 8H5V3.75A2.75 2.75 0 0 1 7.75 1zm-9.5 14.5a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h10.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25zm-3-6c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25H5v-1.75c0-.966.784-1.75 1.75-1.75h10.5c.966 0 1.75.784 1.75 1.75v1.75h1.25c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25zm4-7c-.69 0-1.25.56-1.25 1.25V8h11V3.75c0-.69-.56-1.25-1.25-1.25z"
  }));
}
const ForwardRef = React.forwardRef(PrinterIcon);
export default ForwardRef;