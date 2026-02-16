const React = require("react");
function BatteryIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2.25 3A2.25 2.25 0 0 0 0 5.25v5.5A2.25 2.25 0 0 0 2.25 13h8.5A2.25 2.25 0 0 0 13 10.75v-5.5A2.25 2.25 0 0 0 10.75 3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M15.5 6.75a.75.75 0 1 0-1.5 0v2.5a.75.75 0 1 0 1.5 0z"
  }));
}
const ForwardRef = React.forwardRef(BatteryIcon);
module.exports = ForwardRef;