const React = require("react");
function ChatBubbleRoundIcon({
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
    d: "M12.343 3.5a8.157 8.157 0 1 1-3.765 15.396 1.44 1.44 0 0 0-.689-.139c-.2.003-.415.033-.627.074-.426.082-.922.227-1.417.391-.567.191-1.129.398-1.684.621.204-.51.421-1.081.606-1.63.169-.505.318-1.012.403-1.448.042-.217.072-.438.075-.643a1.466 1.466 0 0 0-.141-.7A8.157 8.157 0 0 1 12.343 3.5M3.7 21.655a37.07 37.07 0 0 1 2.618-1.01c.47-.156.896-.277 1.228-.341.131-.027.264-.043.398-.047a9.62 9.62 0 0 0 4.399 1.058c5.333 0 9.657-4.324 9.657-9.658A9.656 9.656 0 0 0 3.568 7.631a9.657 9.657 0 0 0 .177 8.429v.038a2.32 2.32 0 0 1-.048.382c-.066.34-.191.776-.352 1.255a36.663 36.663 0 0 1-1.21 3.052l-.05.114-.014.03-.004.009a.75.75 0 0 0 .982.998l.648-.282z"
  }));
}
const ForwardRef = React.forwardRef(ChatBubbleRoundIcon);
module.exports = ForwardRef;