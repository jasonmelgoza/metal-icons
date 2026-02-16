const React = require("react");
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
    d: "M8 1.02c.392 0 .772.132 1.08.374l5.25 4.119A1.75 1.75 0 0 1 15 6.89v7.36a.75.75 0 0 1-.747.749L10.25 15a.75.75 0 0 1-.75-.75V10.5h-3v3.75a.75.75 0 0 1-.747.749L1.75 15a.75.75 0 0 1-.75-.75V6.89a1.75 1.75 0 0 1 .67-1.376l5.25-4.12A1.75 1.75 0 0 1 8 1.02m0 1.5c-.056 0-.11.02-.154.054l-5.25 4.12a.251.251 0 0 0-.096.196v6.61H5v-3.25C5 9.56 5.56 9 6.25 9h3.5c.69 0 1.25.56 1.25 1.25v3.25h2.5V6.89a.25.25 0 0 0-.096-.196l-5.25-4.12A.251.251 0 0 0 8 2.521Z"
  }));
}
const ForwardRef = React.forwardRef(HouseIcon);
module.exports = ForwardRef;