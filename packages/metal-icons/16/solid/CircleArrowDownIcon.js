const React = require("react");
function CircleArrowDownIcon({
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
    d: "M2.343 2.343a8 8 0 1 0 11.314 11.314A8 8 0 0 0 2.343 2.343M5.215 8a.75.75 0 0 1 .54.195l1.495 1.36V4.75a.75.75 0 0 1 1.5 0v4.805l1.495-1.36a.75.75 0 0 1 1.01 1.11l-2.75 2.5a.748.748 0 0 1-1.01 0l-2.75-2.5A.75.75 0 0 1 5.215 8"
  }));
}
const ForwardRef = React.forwardRef(CircleArrowDownIcon);
module.exports = ForwardRef;