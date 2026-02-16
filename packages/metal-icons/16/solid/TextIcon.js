const React = require("react");
function TextIcon({
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
    d: "M2 2.75A.75.75 0 0 1 2.75 2h10a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0V3.5H8.5v9H10a.75.75 0 1 1 0 1.5H5.5a.75.75 0 1 1 0-1.5H7v-9H3.5v.75a.75.75 0 0 1-1.5 0z"
  }));
}
const ForwardRef = React.forwardRef(TextIcon);
module.exports = ForwardRef;