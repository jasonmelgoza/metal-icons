import * as React from "react";
function ChatBubbleSquareIcon({
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
    d: "M15 3.25A2.25 2.25 0 0 0 12.75 1h-9.5A2.25 2.25 0 0 0 1 3.25v11a.75.75 0 0 0 1.26.55l2.801-2.6a.75.75 0 0 1 .51-.2h7.179A2.249 2.249 0 0 0 15 9.75zm-2.25-.75a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H5.572a2.25 2.25 0 0 0-1.531.6L2.5 12.53V3.25a.75.75 0 0 1 .75-.75z"
  }));
}
const ForwardRef = React.forwardRef(ChatBubbleSquareIcon);
export default ForwardRef;