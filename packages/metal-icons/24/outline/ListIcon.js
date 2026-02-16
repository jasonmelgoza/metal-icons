const React = require("react");
function ListIcon({
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
    fillRule: "evenodd",
    d: "M2.5 5.75A.75.75 0 0 1 3.25 5h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.5 0A.75.75 0 0 1 7.75 5h13a.75.75 0 1 1 0 1.5h-13A.75.75 0 0 1 7 5.75m-4.5 6a.75.75 0 0 1 .75-.75h1a.75.75 0 1 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.5 0a.75.75 0 0 1 .75-.75h13a.75.75 0 1 1 0 1.5h-13a.75.75 0 0 1-.75-.75m-4.5 6a.75.75 0 0 1 .75-.75h1a.75.75 0 1 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.5 0a.75.75 0 0 1 .75-.75h13a.75.75 0 1 1 0 1.5h-13a.75.75 0 0 1-.75-.75"
  }));
}
const ForwardRef = React.forwardRef(ListIcon);
module.exports = ForwardRef;