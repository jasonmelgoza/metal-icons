const React = require("react");
function CreditCardIcon({
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
    d: "M0 4.25A2.25 2.25 0 0 1 2.25 2h11.5A2.25 2.25 0 0 1 16 4.25V5H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M0 7v4.75A2.25 2.25 0 0 0 2.25 14h11.5A2.25 2.25 0 0 0 16 11.75V7zm3.75 2a.75.75 0 0 0 0 1.5h1.5a.75.75 0 1 0 0-1.5z"
  }));
}
const ForwardRef = React.forwardRef(CreditCardIcon);
module.exports = ForwardRef;