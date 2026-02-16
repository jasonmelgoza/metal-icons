const React = require("react");
function DisabledIcon({
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
    d: "M4.172 19.728c.03.036.064.07.1.1A10.965 10.965 0 0 0 12 23c6.075 0 11-4.925 11-11 0-3.012-1.21-5.742-3.172-7.728a.772.772 0 0 0-.1-.1A10.965 10.965 0 0 0 12 1C5.925 1 1 5.925 1 12c0 3.012 1.21 5.742 3.172 7.728M2.5 12a9.5 9.5 0 0 1 15.666-7.227L4.773 18.166A9.462 9.462 0 0 1 2.5 12m16.727-6.166A9.5 9.5 0 0 1 12 21.5a9.462 9.462 0 0 1-6.166-2.273z"
  }));
}
const ForwardRef = React.forwardRef(DisabledIcon);
module.exports = ForwardRef;