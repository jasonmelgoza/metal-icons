import * as React from "react";
function DuplicateIcon({
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
    d: "M3.75 1A2.75 2.75 0 0 0 1 3.75v10.5A2.75 2.75 0 0 0 3.75 17h1a.75.75 0 1 0 0-1.5h-1c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v1a.75.75 0 1 0 1.5 0v-1A2.75 2.75 0 0 0 14.25 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.75 7A2.75 2.75 0 0 0 7 9.75v10.5A2.75 2.75 0 0 0 9.75 23h10.5A2.75 2.75 0 0 0 23 20.25V9.75A2.75 2.75 0 0 0 20.25 7zM8.5 9.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H9.75c-.69 0-1.25-.56-1.25-1.25z"
  }));
}
const ForwardRef = React.forwardRef(DuplicateIcon);
export default ForwardRef;