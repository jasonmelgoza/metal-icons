const React = require("react");
function RowsIcon({
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
    d: "M22 14.75A1.75 1.75 0 0 0 20.25 13H3.75A1.75 1.75 0 0 0 2 14.75v5.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 20.25zm0-11A1.75 1.75 0 0 0 20.25 2H3.75A1.75 1.75 0 0 0 2 3.75v5.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 9.25z"
  }));
}
const ForwardRef = React.forwardRef(RowsIcon);
module.exports = ForwardRef;