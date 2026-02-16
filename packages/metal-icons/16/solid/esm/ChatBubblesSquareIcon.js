import * as React from "react";
function ChatBubblesSquareIcon({
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
    d: "M11.25 1a.75.75 0 1 1 0 1.5h-9a.75.75 0 0 0-.75.75v6.531l.706-.51a.75.75 0 0 1 .88 1.214L1.19 11.858A.75.75 0 0 1 0 11.25v-8A2.25 2.25 0 0 1 2.25 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 4A2.25 2.25 0 0 0 4 6.25v4.534a2.25 2.25 0 0 0 2.25 2.25h6.041l2.52 1.824A.75.75 0 0 0 16 14.25v-8A2.25 2.25 0 0 0 13.75 4z"
  }));
}
const ForwardRef = React.forwardRef(ChatBubblesSquareIcon);
export default ForwardRef;