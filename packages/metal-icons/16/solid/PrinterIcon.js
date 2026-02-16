const React = require("react");
function PrinterIcon({
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
    d: "M2.25 5H3V3.25A2.25 2.25 0 0 1 5.25 1h5.5A2.25 2.25 0 0 1 13 3.25V5h.75A2.25 2.25 0 0 1 16 7.25v3.5A2.25 2.25 0 0 1 13.75 13H12.5v.75c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25V13H2.25A2.25 2.25 0 0 1 0 10.75v-3.5A2.25 2.25 0 0 1 2.25 5m3-2.5a.75.75 0 0 0-.75.75V5h7V3.25a.75.75 0 0 0-.75-.75zm5.75 11H5V10h6z"
  }));
}
const ForwardRef = React.forwardRef(PrinterIcon);
module.exports = ForwardRef;