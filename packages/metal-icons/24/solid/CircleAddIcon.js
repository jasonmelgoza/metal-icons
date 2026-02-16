const React = require("react");
function CircleAddIcon({
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
    d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11.53-4.78a.75.75 0 0 0-1.28.53v3.5h-3.5a.75.75 0 1 0 0 1.5h3.5v3.5a.75.75 0 1 0 1.5 0v-3.5h3.5a.75.75 0 1 0 0-1.5h-3.5v-3.5a.75.75 0 0 0-.22-.53"
  }));
}
const ForwardRef = React.forwardRef(CircleAddIcon);
module.exports = ForwardRef;