const React = require("react");
function PlusIcon({
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
    d: "M9 3.5a.75.75 0 0 0-1.5 0V7H4a.75.75 0 0 0 0 1.5h3.5V12A.75.75 0 1 0 9 12V8.5h3.5a.75.75 0 1 0 0-1.5H9z"
  }));
}
const ForwardRef = React.forwardRef(PlusIcon);
module.exports = ForwardRef;