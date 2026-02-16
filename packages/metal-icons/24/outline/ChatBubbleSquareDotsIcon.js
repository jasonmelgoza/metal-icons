const React = require("react");
function ChatBubbleSquareDotsIcon({
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
    d: "M8 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M21.195 2.805A2.75 2.75 0 0 1 22 4.75v10.5A2.75 2.75 0 0 1 19.25 18H8.26a1.25 1.25 0 0 0-.801.291l-4.228 3.534A.75.75 0 0 1 2 21.25V4.75A2.75 2.75 0 0 1 4.75 2h14.5c.73 0 1.429.29 1.945.805M20.5 4.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v14.895l2.997-2.505a2.75 2.75 0 0 1 1.763-.64h10.99c.69 0 1.25-.56 1.25-1.25z"
  }));
}
const ForwardRef = React.forwardRef(ChatBubbleSquareDotsIcon);
module.exports = ForwardRef;