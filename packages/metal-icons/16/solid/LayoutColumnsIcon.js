const React = require("react");
function LayoutColumnsIcon({
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
    d: "M13.75 15A2.25 2.25 0 0 0 16 12.75v-9.5A2.25 2.25 0 0 0 13.75 1H11.5v14zM10 15V1H6v14zm-5.5 0V1H2.25A2.25 2.25 0 0 0 0 3.25v9.5A2.25 2.25 0 0 0 2.25 15z"
  }));
}
const ForwardRef = React.forwardRef(LayoutColumnsIcon);
module.exports = ForwardRef;