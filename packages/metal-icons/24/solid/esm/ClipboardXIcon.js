import * as React from "react";
function ClipboardXIcon({
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
    d: "M8.75 1A1.75 1.75 0 0 0 7 2.75V3H5.75A2.75 2.75 0 0 0 3 5.75v14.5A2.75 2.75 0 0 0 5.75 23h12.5A2.75 2.75 0 0 0 21 20.25V5.75A2.75 2.75 0 0 0 18.25 3H17v-.25A1.75 1.75 0 0 0 15.25 1zM8.5 2.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25zm7.28 7.53a.75.75 0 1 0-1.06-1.06L12 11.94 9.28 9.22a.75.75 0 0 0-1.06 1.06L10.94 13l-2.72 2.72a.75.75 0 1 0 1.06 1.06L12 14.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L13.06 13z"
  }));
}
const ForwardRef = React.forwardRef(ClipboardXIcon);
export default ForwardRef;