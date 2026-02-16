const React = require("react");
function PenIcon({
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
    d: "M17.174 1.962a3.285 3.285 0 0 1 4.646 0l.218.218a3.286 3.286 0 0 1 0 4.646L7.351 21.513a.75.75 0 0 1-.348.197l-5.071 1.268a.75.75 0 0 1-.91-.91l1.268-5.07a.75.75 0 0 1 .197-.349L15.163 3.973l.002-.001 2.01-2.01Z"
  }));
}
const ForwardRef = React.forwardRef(PenIcon);
module.exports = ForwardRef;