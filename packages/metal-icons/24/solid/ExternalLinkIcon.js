const React = require("react");
function ExternalLinkIcon({
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
    d: "M15 1.75a.75.75 0 0 1 .75-.75h5.5a.748.748 0 0 1 .75.75v5.5a.75.75 0 1 1-1.5 0V3.56L10.28 13.78a.75.75 0 1 1-1.06-1.06L19.44 2.5h-3.69a.75.75 0 0 1-.75-.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.75 5.5c-.69 0-1.25.56-1.25 1.25v11.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25v-6.5a.75.75 0 1 1 1.5 0v6.5A2.75 2.75 0 0 1 16.25 21H4.75A2.75 2.75 0 0 1 2 18.25V6.75A2.75 2.75 0 0 1 4.75 4h6.5a.75.75 0 1 1 0 1.5z"
  }));
}
const ForwardRef = React.forwardRef(ExternalLinkIcon);
module.exports = ForwardRef;