const React = require("react");
function ChevronDownIcon({
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
    d: "M5.23 8.21a.75.75 0 0 1 1.06.02L12 14.168l5.71-5.938a.75.75 0 1 1 1.08 1.04l-6.25 6.5a.75.75 0 0 1-1.08 0l-6.25-6.5a.75.75 0 0 1 .02-1.06"
  }));
}
const ForwardRef = React.forwardRef(ChevronDownIcon);
module.exports = ForwardRef;