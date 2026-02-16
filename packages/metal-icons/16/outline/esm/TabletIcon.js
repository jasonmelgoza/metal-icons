import * as React from "react";
function TabletIcon({
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
    d: "M7.291 11.293A.993.993 0 0 1 7.995 11h.01c.264 0 .517.105.704.293A1.002 1.002 0 0 1 8.005 13h-.01a.993.993 0 0 1-.704-.293 1.002 1.002 0 0 1 0-1.414"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M.659 1.659A2.25 2.25 0 0 1 2.25 1h11.5A2.25 2.25 0 0 1 16 3.25v9.5A2.25 2.25 0 0 1 13.75 15H2.25A2.25 2.25 0 0 1 0 12.75v-9.5c0-.597.237-1.169.659-1.591m1.06 1.06a.75.75 0 0 0-.219.531v9.5a.75.75 0 0 0 .75.75h11.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.53.22Z"
  }));
}
const ForwardRef = React.forwardRef(TabletIcon);
export default ForwardRef;