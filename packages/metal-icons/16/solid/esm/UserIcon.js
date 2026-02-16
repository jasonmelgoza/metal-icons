import * as React from "react";
function UserIcon({
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
    d: "M4.25 4.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m-.237 5.74A6.988 6.988 0 0 1 8 9.25c1.43 0 2.826.433 3.987 1.24 1.207.84 2.051 2.263 2.474 3.52a.75.75 0 0 1-.711.99H2.25a.75.75 0 0 1-.71-.99c.422-1.257 1.266-2.68 2.473-3.52"
  }));
}
const ForwardRef = React.forwardRef(UserIcon);
export default ForwardRef;