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
    d: "M8.75 7.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12 3a4.75 4.75 0 1 0 0 9.5A4.75 4.75 0 0 0 12 3m0 10.5a8.998 8.998 0 0 0-5.401 1.81 9.381 9.381 0 0 0-3.315 4.717A.75.75 0 0 0 4 21h16a.75.75 0 0 0 .716-.973 9.381 9.381 0 0 0-3.315-4.718A8.998 8.998 0 0 0 12 13.5m-4.501 3.01A7.498 7.498 0 0 1 12 15a7.49 7.49 0 0 1 4.501 1.51 7.838 7.838 0 0 1 2.409 2.99H5.09a7.839 7.839 0 0 1 2.41-2.99Z"
  }));
}
const ForwardRef = React.forwardRef(UserIcon);
module.exports = ForwardRef;