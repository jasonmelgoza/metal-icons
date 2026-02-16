import * as React from "react";
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
    d: "M8.231 2.5a5.269 5.269 0 1 1-2.43 9.944 1.178 1.178 0 0 0-.535-.122c-.142 0-.284.013-.424.038a6.94 6.94 0 0 0-.879.225c-.272.085-.557.186-.834.29.103-.275.203-.557.288-.828.096-.302.18-.612.225-.885a2.31 2.31 0 0 0 .037-.428 1.193 1.193 0 0 0-.123-.534 5.27 5.27 0 0 1 4.675-7.7M2.058 14.934l.002-.001.01-.004.037-.017c.218-.096.438-.19.658-.281a21.464 21.464 0 0 1 1.649-.616 5.46 5.46 0 0 1 .678-.176c.049-.008.086-.012.113-.015a6.768 6.768 0 1 0-3.028-3.026c-.003.04-.008.08-.014.119-.044.23-.102.457-.176.679-.172.545-.42 1.17-.618 1.646-.09.218-.184.434-.28.65l-.017.036-.004.01v.002a.75.75 0 0 0 .99.994"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.25 8.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
  }));
}
const ForwardRef = React.forwardRef(ChatBubbleRoundDotsIcon);
export default ForwardRef;