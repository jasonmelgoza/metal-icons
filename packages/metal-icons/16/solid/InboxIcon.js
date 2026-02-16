const React = require("react");
function InboxIcon({
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
    d: "M0 2.25A2.25 2.25 0 0 1 2.25 0h11.5A2.25 2.25 0 0 1 16 2.25v11.5A2.25 2.25 0 0 1 13.75 16H2.25A2.25 2.25 0 0 1 0 13.75zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75V8H13a.75.75 0 0 0-.53.22L9.69 11H6.31L3.53 8.22A.75.75 0 0 0 3 8H1.5z"
  }));
}
const ForwardRef = React.forwardRef(InboxIcon);
module.exports = ForwardRef;