const React = require("react");
function EditBoxIcon({
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
    d: "M18.45 1.754a2.574 2.574 0 0 1 3.64 0l.156.157a2.574 2.574 0 0 1 0 3.64L10.93 16.868a.75.75 0 0 1-.349.198l-3.648.912a.75.75 0 0 1-.91-.91l.912-3.648a.75.75 0 0 1 .198-.349L18.449 1.754Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 4.75c0-.69.56-1.25 1.25-1.25h7.5a.75.75 0 1 0 0-1.5h-7.5A2.75 2.75 0 0 0 2 4.75v14.5A2.75 2.75 0 0 0 4.75 22h14.5A2.75 2.75 0 0 0 22 19.25v-7.5a.75.75 0 1 0-1.5 0v7.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25z"
  }));
}
const ForwardRef = React.forwardRef(EditBoxIcon);
module.exports = ForwardRef;