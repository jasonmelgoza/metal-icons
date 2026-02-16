const React = require("react");
function ChevronsUpIcon({
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
    d: "M7.293 11.768a.75.75 0 1 1-1.086-1.036l5.25-5.5a.75.75 0 0 1 1.085 0l5.25 5.5a.75.75 0 0 1-1.085 1.036L12 6.836z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.293 18.768a.75.75 0 1 1-1.086-1.036l5.25-5.5a.75.75 0 0 1 1.085 0l5.25 5.5a.75.75 0 0 1-1.085 1.036L12 13.836z"
  }));
}
const ForwardRef = React.forwardRef(ChevronsUpIcon);
module.exports = ForwardRef;