import * as React from "react";
function ArrowDownLeftIcon({
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
    d: "M12.78 4.28a.75.75 0 0 0-1.06-1.06L4.5 10.44V6.75a.75.75 0 1 0-1.5 0v5.5a.748.748 0 0 0 .75.75h5.5a.75.75 0 1 0 0-1.5H5.56z"
  }));
}
const ForwardRef = React.forwardRef(ArrowDownLeftIcon);
export default ForwardRef;