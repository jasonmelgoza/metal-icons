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
    fillRule: "evenodd",
    d: "M1.805 3.805A2.75 2.75 0 0 1 3.75 3h16.5A2.75 2.75 0 0 1 23 5.75v12.5A2.75 2.75 0 0 1 20.25 21H3.75A2.75 2.75 0 0 1 1 18.25V5.75c0-.73.29-1.429.805-1.945m9.486 13.488a.993.993 0 0 1 .704-.293h.01c.264 0 .517.105.704.293A1.002 1.002 0 0 1 12.005 19h-.01a.993.993 0 0 1-.704-.293 1.002 1.002 0 0 1 0-1.414"
  }));
}
const ForwardRef = React.forwardRef(TabletIcon);
export default ForwardRef;