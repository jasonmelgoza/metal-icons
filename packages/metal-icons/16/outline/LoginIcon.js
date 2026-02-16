const React = require("react");
function LoginIcon({
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
    d: "M9.5 1.75a.75.75 0 0 1 .75-.75h2.5A2.25 2.25 0 0 1 15 3.25v9.5A2.25 2.25 0 0 1 12.75 15h-2.5a.75.75 0 1 1 0-1.5h2.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 1-.75-.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.97 3.72a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06-1.06L8.19 8.5H2A.75.75 0 0 1 2 7h6.19L5.97 4.78a.75.75 0 0 1 0-1.06"
  }));
}
const ForwardRef = React.forwardRef(LoginIcon);
module.exports = ForwardRef;