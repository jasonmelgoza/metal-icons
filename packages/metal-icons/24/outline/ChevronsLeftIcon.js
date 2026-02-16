const React = require("react");
function ChevronsLeftIcon({
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
    d: "M11.768 16.707a.75.75 0 1 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 1 1 1.036 1.086L6.836 12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.768 16.707a.75.75 0 1 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 1 1 1.036 1.086L13.836 12z"
  }));
}
const ForwardRef = React.forwardRef(ChevronsLeftIcon);
module.exports = ForwardRef;