import * as React from "react";
function FaceNeutralIcon({
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
    d: "M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8m-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M5 6a1 1 0 0 1 1-1h.007a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m5-1a1 1 0 0 0 0 2h.007a1 1 0 1 0 0-2zm-5.25 5.75A.75.75 0 0 1 5.5 10h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
  }));
}
const ForwardRef = React.forwardRef(FaceNeutralIcon);
export default ForwardRef;