const React = require("react");
function FaceNeutralIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M8.75 15a.75.75 0 0 0 0 1.5h6.501a.75.75 0 0 0 0-1.5zm.245-7A.994.994 0 0 0 8 9a.994.994 0 0 0 .995 1h.01A.994.994 0 0 0 10 9a.994.994 0 0 0-.995-1zm6 0A.994.994 0 0 0 14 9a.994.994 0 0 0 .995 1h.01A.994.994 0 0 0 16 9a.994.994 0 0 0-.995-1z"
  }));
}
const ForwardRef = React.forwardRef(FaceNeutralIcon);
module.exports = ForwardRef;