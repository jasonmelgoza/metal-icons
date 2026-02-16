import * as React from "react";
function ChatBubblesSquareIcon({
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
    d: "M14.25 2A2.75 2.75 0 0 1 17 4.75v.5a.75.75 0 1 1-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v10.94l2.531-2.026a.75.75 0 0 1 .938 1.172l-3.75 3A.75.75 0 0 1 1 17.25V4.75A2.75 2.75 0 0 1 3.75 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.75 7A2.75 2.75 0 0 0 7 9.75v7.5A2.75 2.75 0 0 0 9.75 20h8.048c.284 0 .56.097.781.274l3.203 2.562A.75.75 0 0 0 23 22.25V9.75A2.75 2.75 0 0 0 20.25 7z"
  }));
}
const ForwardRef = React.forwardRef(ChatBubblesSquareIcon);
export default ForwardRef;