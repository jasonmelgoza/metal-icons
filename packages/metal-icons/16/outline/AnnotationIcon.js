const React = require("react");
function AnnotationIcon({
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
    d: "M9.72165 10.5H12.75c.4142 0 .75-.3358.75-.75v-6.5c0-.41421-.3358-.75-.75-.75h-9.5c-.41421 0-.75.33579-.75.75v6.5c0 .4142.33579.75.75.75h3.02828l1.72171 2.4448zm.77825 1.5H12.75C13.9926 12 15 10.9926 15 9.75v-6.5C15 2.00736 13.9926 1 12.75 1h-9.5C2.00736 1 1 2.00736 1 3.25v6.5C1 10.9926 2.00736 12 3.25 12h2.24999l1.8868 2.6792c.29875.4243.92767.4243 1.22641 0z"
  }));
}
const ForwardRef = React.forwardRef(AnnotationIcon);
module.exports = ForwardRef;