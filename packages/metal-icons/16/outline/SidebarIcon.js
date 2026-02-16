const React = require("react");
function SidebarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.25 2A2.25 2.25 0 0 0 1 4.25v7.5A2.25 2.25 0 0 0 3.25 14h9.5A2.25 2.25 0 0 0 15 11.75v-7.5A2.25 2.25 0 0 0 12.75 2zM2.5 4.25a.75.75 0 0 1 .75-.75h1.8v9h-1.8a.75.75 0 0 1-.75-.75zm3.95 8.25h6.3a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75h-6.3z"
  }));
}
const ForwardRef = React.forwardRef(SidebarIcon);
module.exports = ForwardRef;