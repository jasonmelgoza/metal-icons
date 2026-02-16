const React = require("react");
function ChevronRightIcon({
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
    d: "M5.205 3.235a.75.75 0 0 0 .03 1.06L9.158 8l-3.923 3.705a.75.75 0 0 0 1.03 1.09l4.5-4.25a.75.75 0 0 0 0-1.09l-4.5-4.25a.75.75 0 0 0-1.06.03"
  }));
}
const ForwardRef = React.forwardRef(ChevronRightIcon);
module.exports = ForwardRef;