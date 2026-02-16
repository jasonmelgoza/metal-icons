const React = require("react");
function SidebarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.75 3A2.75 2.75 0 0 0 2 5.75v12.5A2.75 2.75 0 0 0 4.75 21h14.5A2.75 2.75 0 0 0 22 18.25V5.75A2.75 2.75 0 0 0 19.25 3zM3.5 5.75c0-.69.56-1.25 1.25-1.25H8v15H4.75c-.69 0-1.25-.56-1.25-1.25zm6 13.75h9.75c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H9.5z"
  }));
}
const ForwardRef = React.forwardRef(SidebarIcon);
module.exports = ForwardRef;