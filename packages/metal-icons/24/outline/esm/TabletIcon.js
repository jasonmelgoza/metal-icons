import * as React from "react";
function TabletIcon({
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
    d: "M12 17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.75 3A2.75 2.75 0 0 0 1 5.75v12.5A2.75 2.75 0 0 0 3.75 21h16.5A2.75 2.75 0 0 0 23 18.25V5.75A2.75 2.75 0 0 0 20.25 3zM2.5 5.75c0-.69.56-1.25 1.25-1.25h16.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25z"
  }));
}
const ForwardRef = React.forwardRef(TabletIcon);
export default ForwardRef;