const React = require("react");
function HeadphonesIcon({
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
    d: "M8 2.5c-1.468 0-2.87.56-3.9 1.548A5.13 5.13 0 0 0 2.5 7.75V8h1.25A2.25 2.25 0 0 1 6 10.25v2.5A2.25 2.25 0 0 1 3.75 15h-.5A2.25 2.25 0 0 1 1 12.75v-5c0-1.8.745-3.52 2.061-4.784A7.135 7.135 0 0 1 8 1c1.847 0 3.624.704 4.939 1.966A6.63 6.63 0 0 1 15 7.75v5A2.25 2.25 0 0 1 12.75 15h-.5A2.25 2.25 0 0 1 10 12.75v-2.5A2.25 2.25 0 0 1 12.25 8h1.25v-.25a5.13 5.13 0 0 0-1.6-3.702A5.635 5.635 0 0 0 8 2.5m5.5 7h-1.25a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75zm-11 0h1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75z"
  }));
}
const ForwardRef = React.forwardRef(HeadphonesIcon);
module.exports = ForwardRef;