const React = require("react");
function ZoomOutIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "currentColor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.694 4.387a6.25 6.25 0 0 0 9.413 7.78l2.613 2.613a.75.75 0 1 0 1.06-1.06l-2.612-2.613a6.25 6.25 0 1 0-10.474-6.72M4.22 6.72a.75.75 0 0 1 .53-.22h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1-.53-1.28"
  }));
}
const ForwardRef = React.forwardRef(ZoomOutIcon);
module.exports = ForwardRef;