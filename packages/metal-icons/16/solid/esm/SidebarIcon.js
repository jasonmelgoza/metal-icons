import * as React from "react";
function SidebarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M5 14H3.25A2.25 2.25 0 0 1 1 11.75v-7.5A2.25 2.25 0 0 1 3.25 2H5zm7.75-12A2.25 2.25 0 0 1 15 4.25v7.5A2.25 2.25 0 0 1 12.75 14H6.5V2z"
  }));
}
const ForwardRef = React.forwardRef(SidebarIcon);
export default ForwardRef;