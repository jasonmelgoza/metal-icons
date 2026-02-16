const React = require("react");
function ZoomOutIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.99 6.708a8.75 8.75 0 0 0 13.394 10.737l4.336 4.335a.75.75 0 1 0 1.06-1.06l-4.335-4.336A8.751 8.751 0 1 0 2.989 6.708Zm3.73 3.512a.75.75 0 0 1 .53-.22h7a.75.75 0 1 1 0 1.5h-7a.75.75 0 0 1-.53-1.28"
  }));
}
const ForwardRef = React.forwardRef(ZoomOutIcon);
module.exports = ForwardRef;