import * as React from "react";
function ViewIcon({
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
    d: "M2.112 4.65C3.43 3.32 5.422 2 8 2s4.57 1.32 5.888 2.65c.575.58 1.084 1.221 1.516 1.914.151.242.287.492.407.751.046.101.087.204.122.31.026.079.067.22.067.375s-.041.296-.067.376a3.19 3.19 0 0 1-.122.31c-.097.214-.234.47-.407.75-.432.693-.94 1.335-1.516 1.914C12.57 12.68 10.578 14 8 14s-4.57-1.32-5.888-2.65A10.953 10.953 0 0 1 .596 9.436a6.746 6.746 0 0 1-.407-.751 3 3 0 0 1-.122-.31A1.231 1.231 0 0 1 0 8c0-.154.04-.295.067-.376a3 3 0 0 1 .122-.31c.097-.214.234-.47.407-.75.432-.693.94-1.335 1.516-1.914m3.767 1.229a3 3 0 1 1 4.242 4.242A3 3 0 0 1 5.88 5.88Z"
  }));
}
const ForwardRef = React.forwardRef(ViewIcon);
export default ForwardRef;