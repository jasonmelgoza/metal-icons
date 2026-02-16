import * as React from "react";
function MonitorIcon({
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
    d: "M1 4.75A2.75 2.75 0 0 1 3.75 2h16.5A2.75 2.75 0 0 1 23 4.75v10.5A2.75 2.75 0 0 1 20.25 18h-7.5v2.5H16a.75.75 0 1 1 0 1.5H8a.75.75 0 1 1 0-1.5h3.25V18h-7.5A2.75 2.75 0 0 1 1 15.25z"
  }));
}
const ForwardRef = React.forwardRef(MonitorIcon);
export default ForwardRef;