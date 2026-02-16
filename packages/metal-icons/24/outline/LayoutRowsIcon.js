const React = require("react");
function LayoutRowsIcon({
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
    d: "M23 4.75A2.75 2.75 0 0 0 20.25 2H3.75A2.75 2.75 0 0 0 1 4.75v15A2.25 2.25 0 0 0 3.25 22h17.5A2.25 2.25 0 0 0 23 19.75zm-1.5 15V16h-19v3.75c0 .414.336.75.75.75h17.5a.75.75 0 0 0 .75-.75M2.5 9.5v5h19v-5zm19-1.5V4.75c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25V8z"
  }));
}
const ForwardRef = React.forwardRef(LayoutRowsIcon);
module.exports = ForwardRef;