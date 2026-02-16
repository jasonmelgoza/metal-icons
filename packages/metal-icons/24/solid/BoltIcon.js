const React = require("react");
function BoltIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.333 1.065a.75.75 0 0 1 .437.791l-.918 6.409 8.48.94a.75.75 0 0 1 .494 1.226l-10.278 12.3a.75.75 0 0 1-1.318-.587l.918-6.409-8.48-.94a.75.75 0 0 1-.494-1.226l10.278-12.3a.75.75 0 0 1 .881-.204"
  }));
}
const ForwardRef = React.forwardRef(BoltIcon);
module.exports = ForwardRef;