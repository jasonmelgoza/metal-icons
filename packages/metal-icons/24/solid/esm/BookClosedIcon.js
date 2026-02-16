import * as React from "react";
function BookClosedIcon({
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
    fillRule: "evenodd",
    d: "M5.75 1A2.75 2.75 0 0 0 3 3.75v16.5A2.75 2.75 0 0 0 5.75 23h13.5A1.75 1.75 0 0 0 21 21.25V2.75A1.75 1.75 0 0 0 19.25 1zM4.5 20.25c0-.69.56-1.25 1.25-1.25H19.5v2.25a.25.25 0 0 1-.25.25H5.75c-.69 0-1.25-.56-1.25-1.25"
  }));
}
const ForwardRef = React.forwardRef(BookClosedIcon);
export default ForwardRef;