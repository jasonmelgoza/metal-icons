const React = require("react");
function DocumentsIcon({
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
    d: "M4 2.25A2.25 2.25 0 0 1 6.25 0H10v4.25c0 .966.784 1.75 1.75 1.75H15v4.75A2.25 2.25 0 0 1 12.75 13h-6.5A2.25 2.25 0 0 1 4 10.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 4.5A1.5 1.5 0 0 1 2.5 3v8.125A3.375 3.375 0 0 0 5.875 14.5H12.5A1.5 1.5 0 0 1 11 16H3.25A2.25 2.25 0 0 1 1 13.75zm10.875 0a.375.375 0 0 1-.375-.375V.5l3 4z"
  }));
}
const ForwardRef = React.forwardRef(DocumentsIcon);
module.exports = ForwardRef;