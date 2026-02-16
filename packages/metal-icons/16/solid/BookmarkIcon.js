const React = require("react");
function BookmarkIcon({
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
    d: "M4.25 1A2.25 2.25 0 0 0 2 3.25v10.83a1 1 0 0 0 1.478.878l4.403-2.394a.25.25 0 0 1 .238 0l4.403 2.394A1 1 0 0 0 14 14.08V3.25A2.25 2.25 0 0 0 11.75 1z"
  }));
}
const ForwardRef = React.forwardRef(BookmarkIcon);
module.exports = ForwardRef;