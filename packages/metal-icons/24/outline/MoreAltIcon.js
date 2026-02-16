const React = require("react");
function MoreAltIcon({
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
    d: "M12 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
  }));
}
const ForwardRef = React.forwardRef(MoreAltIcon);
module.exports = ForwardRef;