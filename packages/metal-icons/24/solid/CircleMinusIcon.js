const React = require("react");
function CircleMinusIcon({
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
    d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m6.72-.53a.75.75 0 0 1 .53-.22h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1-.53-1.28"
  }));
}
const ForwardRef = React.forwardRef(CircleMinusIcon);
module.exports = ForwardRef;