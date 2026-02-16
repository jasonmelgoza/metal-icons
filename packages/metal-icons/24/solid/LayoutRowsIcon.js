const React = require("react");
function LayoutRowsIcon({
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
    d: "M23 4.75A2.75 2.75 0 0 0 20.25 2H3.75A2.75 2.75 0 0 0 1 4.75V8h22zM1 14.5v-5h22v5zM1 16v3.75A2.25 2.25 0 0 0 3.25 22h17.5A2.25 2.25 0 0 0 23 19.75V16z"
  }));
}
const ForwardRef = React.forwardRef(LayoutRowsIcon);
module.exports = ForwardRef;