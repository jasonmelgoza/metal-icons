const React = require("react");
function SendIcon({
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
    d: "m3.373 11.571-.058 2.22a.75.75 0 0 0 1.094.686l2.124-1.098 2.04 2.03a1.976 1.976 0 0 0 1.878.535 2 2 0 0 0 1.44-1.318v-.001L15.88 2.681a1.996 1.996 0 0 0-.049-1.486L3.373 11.57ZM14.757.148A2 2 0 0 0 13.318.12L1.363 4.106l-.005.002a2 2 0 0 0-1.32 1.525A1.975 1.975 0 0 0 .58 7.421l2.475 2.473z"
  }));
}
const ForwardRef = React.forwardRef(SendIcon);
module.exports = ForwardRef;