const React = require("react");
function ChatBubbleRoundDotsIcon({
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
    d: "m2.06 14.933-.002.001a.75.75 0 0 1-.99-.994v-.002l.004-.01.017-.036c.096-.216.19-.432.28-.65.198-.476.446-1.101.618-1.646.074-.222.132-.449.176-.679.006-.04.011-.08.014-.119a6.768 6.768 0 1 1 3.028 3.026h-.003c-.027.003-.063.007-.11.015a5.46 5.46 0 0 0-.678.176 21.55 21.55 0 0 0-1.649.616c-.22.091-.44.185-.658.281l-.037.017zM5.25 8.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
  }));
}
const ForwardRef = React.forwardRef(ChatBubbleRoundDotsIcon);
module.exports = ForwardRef;