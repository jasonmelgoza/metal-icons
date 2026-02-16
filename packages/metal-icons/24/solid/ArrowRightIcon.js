const React = require("react");
function ArrowRightIcon({
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
    d: "M12.229 5.04a.75.75 0 1 1 1.042-1.08l7.5 7.25a.751.751 0 0 1 0 1.08l-7.5 7.25a.751.751 0 0 1-1.042-1.08l6.166-5.96H3.75a.75.75 0 1 1 0-1.5h14.645z"
  }));
}
const ForwardRef = React.forwardRef(ArrowRightIcon);
module.exports = ForwardRef;