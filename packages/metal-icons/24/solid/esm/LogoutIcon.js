import * as React from "react";
function LogoutIcon({
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
    d: "M9.5 2.75A.75.75 0 0 0 8.75 2h-4A2.75 2.75 0 0 0 2 4.75v14.5A2.75 2.75 0 0 0 4.75 22h4a.75.75 0 1 0 0-1.5h-4c-.69 0-1.25-.56-1.25-1.25V4.75c0-.69.56-1.25 1.25-1.25h4a.75.75 0 0 0 .75-.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.47 6.22a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9A.75.75 0 1 1 9 11h10.19l-3.72-3.72a.75.75 0 0 1 0-1.06"
  }));
}
const ForwardRef = React.forwardRef(LogoutIcon);
export default ForwardRef;