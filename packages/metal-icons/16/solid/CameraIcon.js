const React = require("react");
function CameraIcon({
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
    fillRule: "evenodd",
    d: "M5.517 1.188a1.25 1.25 0 0 0-.461.508l-.541 1.093-1.456.124A2.25 2.25 0 0 0 1 5.155v6.595A2.25 2.25 0 0 0 3.25 14h9.5A2.25 2.25 0 0 0 15 11.75V5.155a2.25 2.25 0 0 0-2.059-2.242l-1.457-.124-.54-1.093A1.25 1.25 0 0 0 9.824 1H6.176a1.25 1.25 0 0 0-.66.188ZM8 11.25a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5"
  }));
}
const ForwardRef = React.forwardRef(CameraIcon);
module.exports = ForwardRef;