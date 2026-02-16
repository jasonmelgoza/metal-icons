const React = require("react");
function AlignBottomIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M11.75 2a.75.75 0 0 1 .75.75v12.638l4.96-5.158a.75.75 0 1 1 1.08 1.04l-6.25 6.5a.751.751 0 0 1-1.08 0l-6.25-6.5a.75.75 0 1 1 1.08-1.04L11 15.388V2.75a.75.75 0 0 1 .75-.75M3.5 20.5a.75.75 0 1 0 0 1.5H20a.75.75 0 1 0 0-1.5z"
  }));
}
const ForwardRef = React.forwardRef(AlignBottomIcon);
module.exports = ForwardRef;