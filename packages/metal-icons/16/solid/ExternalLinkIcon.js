const React = require("react");
function ExternalLinkIcon({
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
    d: "M9 .75A.75.75 0 0 1 9.75 0h4.5c.206 0 .393.083.529.218l.001.002.002.001c.14.14.218.33.218.529v4.5a.75.75 0 1 1-1.5 0V2.56L7.28 8.78a.75.75 0 0 1-1.06-1.06l6.22-6.22H9.75A.75.75 0 0 1 9 .75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.25 3.5a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 1 1 1.5 0v4A2.25 2.25 0 0 1 10.75 14h-7.5A2.25 2.25 0 0 1 1 11.75v-7.5A2.25 2.25 0 0 1 3.25 2h4a.75.75 0 0 1 0 1.5z"
  }));
}
const ForwardRef = React.forwardRef(ExternalLinkIcon);
module.exports = ForwardRef;