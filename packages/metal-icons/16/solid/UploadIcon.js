const React = require("react");
function UploadIcon({
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
    d: "M4.24 5.8a.75.75 0 0 0 1.06-.04l1.95-2.1v6.59a.75.75 0 1 0 1.5 0V3.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.101 0L4.2 4.74a.75.75 0 0 0 .04 1.06"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.75 9a.75.75 0 0 1 .75.75v3c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 1 1.5 0v3A2.25 2.25 0 0 1 12.75 15h-9.5A2.25 2.25 0 0 1 1 12.75v-3A.75.75 0 0 1 1.75 9"
  }));
}
const ForwardRef = React.forwardRef(UploadIcon);
module.exports = ForwardRef;