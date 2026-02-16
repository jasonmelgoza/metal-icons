const React = require("react");
function DocumentPlusIcon({
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
    d: "M3.25 0H9v5.25c0 .414.336.75.75.75H15v7.75A2.25 2.25 0 0 1 12.75 16h-9.5A2.25 2.25 0 0 1 1 13.75V2.25A2.25 2.25 0 0 1 3.25 0m5.28 8.22a.75.75 0 0 0-1.28.53V10H6a.75.75 0 1 0 0 1.5h1.25v1.25a.75.75 0 1 0 1.5 0V11.5H10a.75.75 0 1 0 0-1.5H8.75V8.75a.75.75 0 0 0-.22-.53"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 4.5h4l-4-4z"
  }));
}
const ForwardRef = React.forwardRef(DocumentPlusIcon);
module.exports = ForwardRef;