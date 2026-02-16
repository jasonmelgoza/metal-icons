const React = require("react");
function TextAlignRightIcon({
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
    d: "M1.75 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 1 0 0-1.5zm3 3a.75.75 0 0 0 0 1.5h9.5a.75.75 0 1 0 0-1.5zM1 9.75A.75.75 0 0 1 1.75 9h12.5a.75.75 0 1 1 0 1.5H1.75A.75.75 0 0 1 1 9.75M4.75 12a.75.75 0 1 0 0 1.5h9.5a.75.75 0 1 0 0-1.5z"
  }));
}
const ForwardRef = React.forwardRef(TextAlignRightIcon);
module.exports = ForwardRef;