const React = require("react");
function SmartphoneIcon({
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
    d: "M6.75 1A2.75 2.75 0 0 0 4 3.75v16.5A2.75 2.75 0 0 0 6.75 23h10.5A2.75 2.75 0 0 0 20 20.25V3.75A2.75 2.75 0 0 0 17.25 1zM12 18a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2z"
  }));
}
const ForwardRef = React.forwardRef(SmartphoneIcon);
module.exports = ForwardRef;