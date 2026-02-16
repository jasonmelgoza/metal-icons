const React = require("react");
function FaceNeutralIcon({
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
    d: "M8 0a8 8 0 1 1 .001 16.001A8 8 0 0 1 8 0M5.5 10a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM6 5a1 1 0 0 0 0 2h.007a1 1 0 0 0 0-2zm4 0a1 1 0 0 0 0 2h.007a1 1 0 0 0 0-2z"
  }));
}
const ForwardRef = React.forwardRef(FaceNeutralIcon);
module.exports = ForwardRef;