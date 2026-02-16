const React = require("react");
function BoltIcon({
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
    d: "M9.375.078a.75.75 0 0 1 .402.82l-.889 4.418 5.485.908a.75.75 0 0 1 .44 1.236l-7.292 8.285a.75.75 0 0 1-1.298-.643l.889-4.418-5.485-.908a.75.75 0 0 1-.44-1.236L8.479.255a.75.75 0 0 1 .896-.177m-6.17 8.439 4.918.815a.75.75 0 0 1 .612.887l-.489 2.433 4.548-5.169-4.917-.814a.75.75 0 0 1-.612-.888l.489-2.432-4.548 5.168Z"
  }));
}
const ForwardRef = React.forwardRef(BoltIcon);
module.exports = ForwardRef;