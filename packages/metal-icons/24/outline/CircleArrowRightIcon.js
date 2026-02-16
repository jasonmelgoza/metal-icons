const React = require("react");
function CircleArrowRightIcon({
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
    d: "M6 12a.75.75 0 0 1 .75-.75h8.614l-3.129-2.955a.75.75 0 0 1 1.03-1.09l4.5 4.25a.751.751 0 0 1 0 1.09l-4.5 4.25a.75.75 0 0 1-1.03-1.09l3.129-2.955H6.75A.75.75 0 0 1 6 12"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19"
  }));
}
const ForwardRef = React.forwardRef(CircleArrowRightIcon);
module.exports = ForwardRef;