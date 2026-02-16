const React = require("react");
function CheckIcon({
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
    d: "M14.78 4.28a.75.75 0 0 0-1.06-1.06l-7.97 7.97-3.47-3.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0z"
  }));
}
const ForwardRef = React.forwardRef(CheckIcon);
module.exports = ForwardRef;