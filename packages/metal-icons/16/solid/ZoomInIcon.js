const React = require("react");
function ZoomInIcon({
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
    d: "M4.387 1.694a6.25 6.25 0 0 1 7.78 9.413l2.613 2.613a.75.75 0 1 1-1.06 1.06l-2.613-2.612a6.25 6.25 0 1 1-6.72-10.474M7.78 4.22a.75.75 0 0 0-1.28.53V6.5H4.75a.75.75 0 0 0 0 1.5H6.5v1.75a.75.75 0 1 0 1.5 0V8h1.75a.75.75 0 1 0 0-1.5H8V4.75a.75.75 0 0 0-.22-.53"
  }));
}
const ForwardRef = React.forwardRef(ZoomInIcon);
module.exports = ForwardRef;