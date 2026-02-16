import * as React from "react";
function SidebarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M8 21H4.75A2.75 2.75 0 0 1 2 18.25V5.75A2.75 2.75 0 0 1 4.75 3H8zM19.25 3A2.75 2.75 0 0 1 22 5.75v12.5A2.75 2.75 0 0 1 19.25 21H9.5V3z"
  }));
}
const ForwardRef = React.forwardRef(SidebarIcon);
export default ForwardRef;