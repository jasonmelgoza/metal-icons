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
    d: "M7.25 4a.75.75 0 0 1 .75.75V6.5h1.75a.75.75 0 1 1 0 1.5H8v1.75a.75.75 0 1 1-1.5 0V8H4.75a.75.75 0 0 1 0-1.5H6.5V4.75A.75.75 0 0 1 7.25 4"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 1a6.25 6.25 0 1 0 3.857 11.168l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A6.25 6.25 0 0 0 7.25 1M2.5 7.25a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
  }));
}
const ForwardRef = React.forwardRef(ZoomInIcon);
module.exports = ForwardRef;