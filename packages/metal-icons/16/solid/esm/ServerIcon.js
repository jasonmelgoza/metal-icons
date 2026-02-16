import * as React from "react";
function ServerIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "currentColor",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M10.5 15H2.75A1.75 1.75 0 0 1 1 13.25v-2.5C1 9.784 1.784 9 2.75 9h7.75zm2.75-6c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 15H12V9zM10.5 7H2.75A1.75 1.75 0 0 1 1 5.25v-2.5C1 1.784 1.784 1 2.75 1h7.75zm2.75-6c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 7H12V1z"
  }));
}
const ForwardRef = React.forwardRef(ServerIcon);
export default ForwardRef;