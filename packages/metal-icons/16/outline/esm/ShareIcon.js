import * as React from "react";
function ShareIcon({
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
    d: "M5.3 5.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.749.749 0 1 1-1.1 1.02l-1.95-2.1v6.59a.75.75 0 1 1-1.5 0V3.66z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 9.25A2.25 2.25 0 0 1 4.25 7H5a.75.75 0 1 1 0 1.5h-.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75H11A.75.75 0 1 1 11 7h.75A2.25 2.25 0 0 1 14 9.25v3.5A2.25 2.25 0 0 1 11.75 15h-7.5A2.25 2.25 0 0 1 2 12.75z"
  }));
}
const ForwardRef = React.forwardRef(ShareIcon);
export default ForwardRef;