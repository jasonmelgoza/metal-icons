const React = require("react");
function ChevronRightIcon({
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
    d: "M8.21 18.77a.75.75 0 0 1 .02-1.06L14.168 12 8.23 6.29a.75.75 0 1 1 1.04-1.08l6.5 6.25a.751.751 0 0 1 0 1.08l-6.5 6.25a.75.75 0 0 1-1.06-.02"
  }));
}
const ForwardRef = React.forwardRef(ChevronRightIcon);
module.exports = ForwardRef;