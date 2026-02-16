const React = require("react");
function SearchIcon({
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
    d: "M7.25 2a5.25 5.25 0 1 0 3.144 9.455l2.326 2.325a.75.75 0 1 0 1.06-1.06l-2.325-2.326A5.25 5.25 0 0 0 7.25 2M3.5 7.25a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
  }));
}
const ForwardRef = React.forwardRef(SearchIcon);
module.exports = ForwardRef;