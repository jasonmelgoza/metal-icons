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
    d: "M1 2.298A2.25 2.25 0 0 1 3.25.048H13.5a1.5 1.5 0 0 1 1.5 1.5V14.5a1.5 1.5 0 0 1-1.5 1.5H3.25A2.25 2.25 0 0 1 1 13.75zm2.75 9.452c-.69 0-1.25.56-1.25 1.25v.75c0 .414.336.75.75.75H13.5v-2.75z"
  }));
}
const ForwardRef = React.forwardRef(BookClosedIcon);
export default ForwardRef;