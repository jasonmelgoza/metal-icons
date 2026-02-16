import * as React from "react";
function ClipboardIcon({
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
    fillRule: "evenodd",
    d: "M8.75 1A1.75 1.75 0 0 0 7 2.75V3H5.75A2.75 2.75 0 0 0 3 5.75v14.5A2.75 2.75 0 0 0 5.75 23h12.5A2.75 2.75 0 0 0 21 20.25V5.75A2.75 2.75 0 0 0 18.25 3H17v-.25A1.75 1.75 0 0 0 15.25 1zm8.232 3.5A1.75 1.75 0 0 1 15.25 6h-6.5a1.75 1.75 0 0 1-1.732-1.5H5.75c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25zM8.5 2.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25z"
  }));
}
const ForwardRef = React.forwardRef(ClipboardIcon);
export default ForwardRef;