const React = require("react");
function ServerIcon({
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
    d: "M16.5 13v9H3.75A1.75 1.75 0 0 1 2 20.25v-5.5c0-.966.784-1.75 1.75-1.75zm0-11v9H3.75A1.75 1.75 0 0 1 2 9.25v-5.5C2 2.784 2.784 2 3.75 2zm3.75 11c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 22H18v-9zm0-11c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 11H18V2z"
  }));
}
const ForwardRef = React.forwardRef(ServerIcon);
module.exports = ForwardRef;