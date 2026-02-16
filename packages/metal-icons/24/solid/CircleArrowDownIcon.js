const React = require("react");
function CircleArrowDownIcon({
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
    d: "M12 1C5.925 1 1 5.925 1 12c0 14.187 22 14.187 22 0 0-6.075-4.925-11-11-11m.53 5.22a.75.75 0 0 0-1.28.53v8.614l-2.955-3.129a.75.75 0 0 0-1.09 1.03l4.248 4.498a.748.748 0 0 0 .535.237H12l.012-.001a.747.747 0 0 0 .533-.234l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V6.75a.75.75 0 0 0-.22-.53"
  }));
}
const ForwardRef = React.forwardRef(CircleArrowDownIcon);
module.exports = ForwardRef;