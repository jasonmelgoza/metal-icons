const React = require("react");
function CircleAddIcon({
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
    d: "M3.404 3.404a6.5 6.5 0 1 0 9.192 9.192 6.5 6.5 0 0 0-9.192-9.192M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 4.25a.75.75 0 0 1 .75.75v2.25H11a.75.75 0 1 1 0 1.5H8.75V11a.75.75 0 1 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5A.75.75 0 0 1 8 4.25"
  }));
}
const ForwardRef = React.forwardRef(CircleAddIcon);
module.exports = ForwardRef;