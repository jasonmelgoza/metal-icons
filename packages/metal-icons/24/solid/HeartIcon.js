const React = require("react");
function HeartIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 9.417c0-3.492 2.644-7.392 6.786-7.392 1.95 0 3.333 1.08 4.214 1.987.88-.907 2.264-1.987 4.214-1.987 4.142 0 6.786 3.9 6.786 7.392 0 1.82-.705 3.514-1.703 5.002-.999 1.489-2.319 2.813-3.62 3.91a31.008 31.008 0 0 1-3.604 2.602c-.497.307-.918.547-1.224.713-.153.082-.28.148-.377.195a2.814 2.814 0 0 1-.215.092.883.883 0 0 1-.071.021.775.775 0 0 1-.371 0 .908.908 0 0 1-.151-.051 2.858 2.858 0 0 1-.136-.062 10.033 10.033 0 0 1-.377-.195 24.563 24.563 0 0 1-1.224-.713 31.01 31.01 0 0 1-3.604-2.602c-1.301-1.097-2.621-2.421-3.62-3.91C1.705 12.93 1 11.236 1 9.417"
  }));
}
const ForwardRef = React.forwardRef(HeartIcon);
module.exports = ForwardRef;