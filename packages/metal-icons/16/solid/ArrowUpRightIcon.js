const React = require("react");
function ArrowUpRightIcon({
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
    d: "M12.943 3.463A.748.748 0 0 0 12.25 3h-5.5a.75.75 0 0 0 0 1.5h3.69l-7.22 7.22a.75.75 0 1 0 1.06 1.06l7.22-7.22v3.69a.75.75 0 1 0 1.5 0v-5.5a.746.746 0 0 0-.057-.287"
  }));
}
const ForwardRef = React.forwardRef(ArrowUpRightIcon);
module.exports = ForwardRef;