const React = require("react");
function MailIcon({
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
    d: "M15.752 2.223A2.252 2.252 0 0 0 13.75 1H2.25A2.25 2.25 0 0 0 .249 2.221L8 8.297zM.25 13.78A2.25 2.25 0 0 1 0 12.75V3.934l5.365 4.2L.25 13.781Zm14.407 1.028a2.248 2.248 0 0 1-.907.191H2.25a2.25 2.25 0 0 1-.907-.19l5.204-5.747.99.777a.75.75 0 0 0 .926 0l.989-.777zM16 3.934v8.816c0 .362-.087.715-.25 1.031l-5.116-5.647h.001z"
  }));
}
const ForwardRef = React.forwardRef(MailIcon);
module.exports = ForwardRef;