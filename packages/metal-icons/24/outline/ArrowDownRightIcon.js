const React = require("react");
function ArrowDownRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M5.22 7.28a.75.75 0 0 1 1.06-1.06L17.5 17.44V9.75a.75.75 0 1 1 1.5 0v9.5a.746.746 0 0 1-.75.75h-9.5a.75.75 0 1 1 0-1.5h7.69z"
  }));
}
const ForwardRef = React.forwardRef(ArrowDownRightIcon);
module.exports = ForwardRef;