const React = require("react");
function BookmarkIcon({
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
    d: "M6.75 2A2.75 2.75 0 0 0 4 4.75v16.376a1 1 0 0 0 1.382.924l6.522-2.699a.249.249 0 0 1 .192 0l6.522 2.699A1 1 0 0 0 20 21.126V4.75A2.75 2.75 0 0 0 17.25 2z"
  }));
}
const ForwardRef = React.forwardRef(BookmarkIcon);
module.exports = ForwardRef;