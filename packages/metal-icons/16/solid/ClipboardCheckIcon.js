const React = require("react");
function ClipboardCheckIcon({
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
    d: "M12.75 1h-.775c-.115-.57-.62-1-1.225-1h-5.5a1.25 1.25 0 0 0-1.225 1H3.25A2.25 2.25 0 0 0 1 3.25v10.5A2.25 2.25 0 0 0 3.25 16h9.5A2.25 2.25 0 0 0 15 13.75V3.25A2.25 2.25 0 0 0 12.75 1m-7.25.5V3h5V1.5zm6.28 4.72a.75.75 0 0 1 0 1.06l-4.51 4.5a.753.753 0 0 1-1.063 0l-2.005-2a.75.75 0 0 1 .537-1.261.753.753 0 0 1 .525.2l1.474 1.471 3.98-3.97a.752.752 0 0 1 1.062 0"
  }));
}
const ForwardRef = React.forwardRef(ClipboardCheckIcon);
module.exports = ForwardRef;