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
    d: "M2.805 3.305A2.75 2.75 0 0 1 4.75 2.5h10.172c.73 0 1.428.29 1.944.805l4.329 4.329c.515.516.805 1.215.805 1.944V19.75a2.75 2.75 0 0 1-2.75 2.75H4.75A2.75 2.75 0 0 1 2 19.75V5.25c0-.73.29-1.429.805-1.945M3.5 5.25C3.5 4.56 4.06 4 4.75 4H6v2.75c0 .966.784 1.75 1.75 1.75h4.5A1.75 1.75 0 0 0 14 6.75V4h.922c.331 0 .649.132.883.366l4.329 4.329c.234.234.366.552.366.883V19.75c0 .69-.56 1.25-1.25 1.25H18v-6.75a1.75 1.75 0 0 0-1.75-1.75h-8.5A1.75 1.75 0 0 0 6 14.25V21H4.75c-.69 0-1.25-.56-1.25-1.25zm9-1.25h-5v2.75c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25zm-5 17v-6.75a.25.25 0 0 1 .25-.25h8.5a.25.25 0 0 1 .25.25V21z"
  }));
}
const ForwardRef = React.forwardRef(FloppyIcon);
module.exports = ForwardRef;