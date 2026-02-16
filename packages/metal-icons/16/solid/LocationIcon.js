const React = require("react");
function LocationIcon({
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
    fillRule: "evenodd",
    d: "M14.78 1.22a.75.75 0 0 1 .148.851l-5.921 12.5a.75.75 0 0 1-1.406-.14L6.395 9.606 1.568 8.4a.75.75 0 0 1-.14-1.406l12.5-5.92a.75.75 0 0 1 .852.146"
  }));
}
const ForwardRef = React.forwardRef(LocationIcon);
module.exports = ForwardRef;