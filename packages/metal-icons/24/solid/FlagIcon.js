const React = require("react");
function FlagIcon({
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
    d: "M15.898 3.958c1.12.135 2.37-.115 3.89-1.304A.75.75 0 0 1 21 3.245V16.2a.75.75 0 0 1-.288.59c-1.793 1.403-3.434 1.8-4.994 1.612-1.477-.179-2.815-.881-4.01-1.509l-.056-.03c-1.26-.66-2.371-1.234-3.55-1.376-1.048-.127-2.211.085-3.602 1.087v5.676a.75.75 0 0 1-1.5 0V3.245a.75.75 0 0 1 .288-.59c1.794-1.403 3.434-1.8 4.994-1.612 1.477.179 2.815.881 4.01 1.509l.056.03c1.26.66 2.371 1.234 3.55 1.376"
  }));
}
const ForwardRef = React.forwardRef(FlagIcon);
module.exports = ForwardRef;