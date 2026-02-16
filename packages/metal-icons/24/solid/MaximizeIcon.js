const React = require("react");
function MaximizeIcon({
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
    d: "M15.083 3.5a.75.75 0 0 1 0-1.5h6.167a.75.75 0 0 1 .75.75v6.167a.75.75 0 0 1-1.5 0V4.56l-5.4 5.4a.75.75 0 0 1-1.06-1.06l5.4-5.401h-4.357ZM9.961 14.04a.75.75 0 0 1 0 1.06l-5.4 5.4h4.356a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75v-6.167a.75.75 0 0 1 1.5 0v4.356l5.4-5.4a.75.75 0 0 1 1.06 0Z"
  }));
}
const ForwardRef = React.forwardRef(MaximizeIcon);
module.exports = ForwardRef;