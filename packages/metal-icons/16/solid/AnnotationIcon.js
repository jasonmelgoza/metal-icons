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
    d: "M12.75 1C13.9926 1 15 2.00736 15 3.25v6.5c0 1.2426-1.0074 2.25-2.25 2.25h-2.2501l-1.8867 2.6792c-.29874.4243-.92766.4243-1.22641 0L5.49999 12H3.25C2.00736 12 1 10.9926 1 9.75v-6.5C1 2.00736 2.00736 1 3.25 1z"
  }));
}
const ForwardRef = React.forwardRef(AnnotationIcon);
module.exports = ForwardRef;