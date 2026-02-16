const React = require("react");
function ClockIcon({
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
    d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8.5-4.25a.75.75 0 0 0-1.5 0V8c0 .284.16.544.415.67l2.5 1.25a.749.749 0 1 0 .67-1.34L8.5 7.535z"
  }));
}
const ForwardRef = React.forwardRef(ClockIcon);
module.exports = ForwardRef;