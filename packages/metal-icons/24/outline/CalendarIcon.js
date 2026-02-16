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
    fillRule: "evenodd",
    d: "M17 1a.75.75 0 1 0-1.5 0v1h-7V1A.75.75 0 0 0 7 1v1H4.75A2.75 2.75 0 0 0 2 4.75v14.5A2.75 2.75 0 0 0 4.75 22h14.5A2.75 2.75 0 0 0 22 19.25V4.75A2.75 2.75 0 0 0 19.25 2H17zm3.5 7V4.75c0-.69-.56-1.25-1.25-1.25H17V5a.75.75 0 1 1-1.5 0V3.5h-7V5A.75.75 0 0 1 7 5V3.5H4.75c-.69 0-1.25.56-1.25 1.25V8zm-17 1.5h17v9.75c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25z"
  }));
}
const ForwardRef = React.forwardRef(CalendarIcon);
module.exports = ForwardRef;