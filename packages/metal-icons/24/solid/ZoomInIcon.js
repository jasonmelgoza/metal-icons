const React = require("react");
function ZoomInIcon({
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
    d: "M6.708 2.99a8.75 8.75 0 0 1 10.737 13.394l4.335 4.336a.75.75 0 1 1-1.06 1.06l-4.336-4.335A8.751 8.751 0 1 1 6.708 2.989Zm4.572 3.73a.75.75 0 0 0-1.28.53V10H7.25a.75.75 0 1 0 0 1.5H10v2.75a.75.75 0 1 0 1.5 0V11.5h2.75a.75.75 0 1 0 0-1.5H11.5V7.25a.75.75 0 0 0-.22-.53"
  }));
}
const ForwardRef = React.forwardRef(ZoomInIcon);
module.exports = ForwardRef;