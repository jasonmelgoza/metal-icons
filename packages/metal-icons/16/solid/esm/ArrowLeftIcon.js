import * as React from "react";
function ArrowLeftIcon({
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
    d: "M7.765 4.045a.75.75 0 1 0-1.03-1.09L2.237 7.203a.748.748 0 0 0-.001 1.093l4.499 4.25a.75.75 0 0 0 1.03-1.091L4.636 8.5h8.614a.75.75 0 1 0 0-1.5H4.636z"
  }));
}
const ForwardRef = React.forwardRef(ArrowLeftIcon);
export default ForwardRef;