import * as React from "react";
function ArchiveIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "currentColor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M6.75 8a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v1.5c0 .698-.409 1.3-1 1.582v6.918A2.25 2.25 0 0 1 12.75 15h-9.5A2.25 2.25 0 0 1 1 12.75V5.832A1.75 1.75 0 0 1 0 4.25zm13.5 10V6h-11v6.75c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75m1-8.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25z"
  }));
}
const ForwardRef = React.forwardRef(ArchiveIcon);
export default ForwardRef;