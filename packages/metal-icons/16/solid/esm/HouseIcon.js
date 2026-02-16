import * as React from "react";
function HouseIcon({
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
    d: "M8 1.02c.392 0 .772.132 1.08.374l5.25 4.119A1.75 1.75 0 0 1 15 6.89v7.36a.75.75 0 0 1-.747.749L10.25 15a.75.75 0 0 1-.75-.75V10.5h-3v3.75a.75.75 0 0 1-.75.75H1.747A.75.75 0 0 1 1 14.25V6.89a1.75 1.75 0 0 1 .67-1.376l5.25-4.12A1.75 1.75 0 0 1 8 1.02"
  }));
}
const ForwardRef = React.forwardRef(HouseIcon);
export default ForwardRef;