const React = require("react");
function TextAlignJustifyIcon({
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
    d: "M2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 1 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h18.5a.75.75 0 1 0 0-1.5zM2 13.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1-.75-.75M2.75 17a.75.75 0 1 0 0 1.5h18.5a.75.75 0 1 0 0-1.5z"
  }));
}
const ForwardRef = React.forwardRef(TextAlignJustifyIcon);
module.exports = ForwardRef;