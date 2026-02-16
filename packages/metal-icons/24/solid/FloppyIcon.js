const React = require("react");
function FloppyIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 25,
    fill: "currentColor",
    viewBox: "0 0 24 25",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.805 3.305A2.75 2.75 0 0 1 4.75 2.5h10.172c.73 0 1.428.29 1.944.805l4.329 4.329c.515.516.805 1.215.805 1.944V19.75a2.75 2.75 0 0 1-2.75 2.75H4.75A2.75 2.75 0 0 1 2 19.75V5.25c0-.73.29-1.429.805-1.945M17 21H7v-6.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zM14 4H6v4a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 14 8z"
  }));
}
const ForwardRef = React.forwardRef(FloppyIcon);
module.exports = ForwardRef;