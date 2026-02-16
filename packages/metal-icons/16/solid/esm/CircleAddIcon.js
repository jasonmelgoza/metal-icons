import * as React from "react";
function CircleAddIcon({
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
    fillRule: "evenodd",
    d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8.53-3.53A.75.75 0 0 0 7.25 5v2.25H5a.75.75 0 0 0 0 1.5h2.25V11a.75.75 0 1 0 1.5 0V8.75H11a.75.75 0 1 0 0-1.5H8.75V5a.75.75 0 0 0-.22-.53"
  }));
}
const ForwardRef = React.forwardRef(CircleAddIcon);
export default ForwardRef;