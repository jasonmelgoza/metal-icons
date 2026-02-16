const React = require("react");
function RowsIcon({
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
    d: "M15 2.75A1.75 1.75 0 0 0 13.25 1H2.75A1.75 1.75 0 0 0 1 2.75v2.5C1 6.216 1.784 7 2.75 7h10.5A1.75 1.75 0 0 0 15 5.25zm0 8A1.75 1.75 0 0 0 13.25 9H2.75A1.75 1.75 0 0 0 1 10.75v2.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 15 13.25z"
  }));
}
const ForwardRef = React.forwardRef(RowsIcon);
module.exports = ForwardRef;