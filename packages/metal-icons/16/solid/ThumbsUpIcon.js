const React = require("react");
function ThumbsUpIcon({
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
    d: "M6.31.716 4 6.366V16h8.511a2.25 2.25 0 0 0 2.224-1.912l.994-6.549a2.25 2.25 0 0 0-2.224-2.588H9.988V2.575A2.575 2.575 0 0 0 7.412 0 1.206 1.206 0 0 0 6.31.716M2.25 16V6.366A2.25 2.25 0 0 0 0 8.616v5.134A2.25 2.25 0 0 0 2.25 16"
  }));
}
const ForwardRef = React.forwardRef(ThumbsUpIcon);
module.exports = ForwardRef;