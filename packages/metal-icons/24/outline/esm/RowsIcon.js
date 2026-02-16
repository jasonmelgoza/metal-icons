import * as React from "react";
function RowsIcon({
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
    d: "M20.5 3.75v5.5a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 1 .25-.25h16.5a.25.25 0 0 1 .25.25M20.25 2c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 11H3.75A1.75 1.75 0 0 1 2 9.25v-5.5C2 2.784 2.784 2 3.75 2zm.25 12.75v5.5a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 1 .25-.25h16.5a.25.25 0 0 1 .25.25M20.25 13c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-5.5c0-.966.784-1.75 1.75-1.75z"
  }));
}
const ForwardRef = React.forwardRef(RowsIcon);
export default ForwardRef;