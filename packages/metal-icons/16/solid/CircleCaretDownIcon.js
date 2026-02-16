const React = require("react");
function CircleCaretDownIcon({
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
    d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m2.908 6.39a.75.75 0 0 1-.027.766l-2.25 3.5a.75.75 0 0 1-1.262 0l-2.25-3.5A.75.75 0 0 1 5.75 6h4.5a.75.75 0 0 1 .658.39"
  }));
}
const ForwardRef = React.forwardRef(CircleCaretDownIcon);
module.exports = ForwardRef;