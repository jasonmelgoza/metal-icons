const React = require("react");
function UserIcon({
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
    d: "M7.25 7.75a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m-.651 7.56A8.998 8.998 0 0 1 12 13.5c1.944 0 3.835.635 5.401 1.81a9.381 9.381 0 0 1 3.315 4.717A.75.75 0 0 1 20 21H4a.75.75 0 0 1-.716-.973 9.381 9.381 0 0 1 3.315-4.718Z"
  }));
}
const ForwardRef = React.forwardRef(UserIcon);
module.exports = ForwardRef;