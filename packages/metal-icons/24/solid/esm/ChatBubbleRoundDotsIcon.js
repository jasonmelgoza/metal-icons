import * as React from "react";
function ChatBubbleRoundDotsIcon({
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
    d: "M6.318 20.645c-.885.303-1.758.64-2.618 1.01h-.003l-.648.283a.75.75 0 0 1-.982-.998l.004-.01.014-.03.05-.113a36.65 36.65 0 0 0 1.21-3.052c.161-.48.286-.915.352-1.255a2.32 2.32 0 0 0 .048-.382v-.038A9.657 9.657 0 1 1 22 11.657c0 5.334-4.324 9.658-9.657 9.658a9.62 9.62 0 0 1-4.399-1.058c-.134.004-.267.02-.398.047-.332.064-.758.185-1.228.34ZM8.25 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
  }));
}
const ForwardRef = React.forwardRef(ChatBubbleRoundDotsIcon);
export default ForwardRef;