const React = require("react");
function DocumentIcon({
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
    d: "M9 0H3.25A2.25 2.25 0 0 0 1 2.25v11.5A2.25 2.25 0 0 0 3.25 16h9.5A2.25 2.25 0 0 0 15 13.75V6H9.75A.75.75 0 0 1 9 5.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 4.5h-4v-4z"
  }));
}
const ForwardRef = React.forwardRef(DocumentIcon);
module.exports = ForwardRef;