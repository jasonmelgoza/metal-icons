const React = require("react");
function PencilIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "currentColor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.303 0c-.675 0-1.321.268-1.798.745l-1.422 1.422h-.001l-8.966 8.966a.75.75 0 0 0-.197.349l-.897 3.586a.75.75 0 0 0 .91.91l3.586-.897a.75.75 0 0 0 .349-.197L15.255 4.495a2.543 2.543 0 0 0 0-3.596l-.154-.154A2.543 2.543 0 0 0 13.303 0M2.323 12.047l8.29-8.29 1.63 1.63-8.29 8.29-2.172.542.543-2.172ZM14.5 2.697c0 .277-.11.542-.305.738l-.895.895-1.626-1.633.891-.892a1.044 1.044 0 0 1 1.476 0l.154.155c.195.195.305.46.305.737"
  }));
}
const ForwardRef = React.forwardRef(PencilIcon);
module.exports = ForwardRef;