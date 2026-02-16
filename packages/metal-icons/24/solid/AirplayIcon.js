const React = require("react");
function AirplayIcon({
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
    d: "M20.5 15V7A1.5 1.5 0 0 0 19 5.5H5A1.5 1.5 0 0 0 3.5 7v8A1.5 1.5 0 0 0 5 16.5h1.25a.75.75 0 0 1 0 1.5H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1.25a.75.75 0 0 1 0-1.5H19a1.5 1.5 0 0 0 1.5-1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.96 13.561a1.25 1.25 0 0 1 2.08 0l2.996 4.496A1.25 1.25 0 0 1 14.996 20H9.004a1.25 1.25 0 0 1-1.04-1.943l2.995-4.496Z"
  }));
}
const ForwardRef = React.forwardRef(AirplayIcon);
module.exports = ForwardRef;