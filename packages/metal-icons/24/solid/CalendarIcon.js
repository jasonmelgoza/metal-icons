const React = require("react");
function CalendarIcon({
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
    d: "M16.78.47c.141.14.22.331.22.53v1h2.25A2.75 2.75 0 0 1 22 4.75V8H2V4.75A2.75 2.75 0 0 1 4.75 2H7V1a.75.75 0 0 1 1.5 0v1h7V1a.75.75 0 0 1 1.28-.53M2 9.5v9.75A2.75 2.75 0 0 0 4.75 22h14.5A2.75 2.75 0 0 0 22 19.25V9.5z"
  }));
}
const ForwardRef = React.forwardRef(CalendarIcon);
module.exports = ForwardRef;