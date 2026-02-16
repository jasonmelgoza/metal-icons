import * as React from "react";
function LoginIcon({
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
    d: "M14.5 2.75a.75.75 0 0 1 .75-.75h4A2.75 2.75 0 0 1 22 4.75v14.5A2.75 2.75 0 0 1 19.25 22h-4a.75.75 0 1 1 0-1.5h4c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25h-4a.75.75 0 0 1-.75-.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.47 6.22a.75.75 0 0 1 1.06 0l5 5a.745.745 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H3A.75.75 0 1 1 3 11h10.19L9.47 7.28a.75.75 0 0 1 0-1.06"
  }));
}
const ForwardRef = React.forwardRef(LoginIcon);
export default ForwardRef;