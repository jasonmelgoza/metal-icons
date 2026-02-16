import * as React from "react";
function BookClosedIcon({
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
    fillRule: "evenodd",
    d: "M2.5 2.25a.75.75 0 0 1 .75-.75h10a.25.25 0 0 1 .25.25v8.5H3.75c-.45 0-.875.108-1.25.3zM2.5 13v.75c0 .414.336.75.75.75h10a.25.25 0 0 0 .25-.25v-2.5H3.75c-.69 0-1.25.56-1.25 1.25M1 13V2.25A2.25 2.25 0 0 1 3.25 0h10C14.216 0 15 .784 15 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5H3.25A2.25 2.25 0 0 1 1 13.75z"
  }));
}
const ForwardRef = React.forwardRef(BookClosedIcon);
export default ForwardRef;