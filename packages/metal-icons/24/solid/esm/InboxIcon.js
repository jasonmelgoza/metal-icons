import * as React from "react";
function InboxIcon({
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
    d: "M2 4.75A2.75 2.75 0 0 1 4.75 2h14.5A2.75 2.75 0 0 1 22 4.75v14.5A2.75 2.75 0 0 1 19.25 22H4.75A2.75 2.75 0 0 1 2 19.25zM20.5 12V4.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25V12H7a.75.75 0 0 1 .53.22L10.31 15h3.38l2.78-2.78A.75.75 0 0 1 17 12z"
  }));
}
const ForwardRef = React.forwardRef(InboxIcon);
export default ForwardRef;