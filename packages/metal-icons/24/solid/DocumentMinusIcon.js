const React = require("react");
function DocumentMinusIcon({
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
    d: "M3 3.75A2.75 2.75 0 0 1 5.75 1H13v7.25c0 .414.336.75.75.75H21v11.25A2.75 2.75 0 0 1 18.25 23H5.75A2.75 2.75 0 0 1 3 20.25zM8.75 15a.75.75 0 1 0 0 1.5h6.5a.75.75 0 1 0 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 7.5v-6l.013.013 5.974 5.974.013.013z"
  }));
}
const ForwardRef = React.forwardRef(DocumentMinusIcon);
module.exports = ForwardRef;