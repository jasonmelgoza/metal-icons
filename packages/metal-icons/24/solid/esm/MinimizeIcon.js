import * as React from "react";
function MinimizeIcon({
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
    d: "M20.78 4.28a.75.75 0 0 0-1.06-1.06L14.5 8.44V4.75a.75.75 0 1 0-1.5 0v5.5a.745.745 0 0 0 .75.75h5.5a.75.75 0 1 0 0-1.5h-3.69zM4 13.75c0 .414.336.75.75.75h3.69l-5.22 5.22a.749.749 0 1 0 1.06 1.06l5.22-5.22v3.69a.75.75 0 0 0 1.5 0v-5.5a.747.747 0 0 0-.215-.525l-.01-.01A.747.747 0 0 0 10.25 13h-5.5a.75.75 0 0 0-.75.75"
  }));
}
const ForwardRef = React.forwardRef(MinimizeIcon);
export default ForwardRef;