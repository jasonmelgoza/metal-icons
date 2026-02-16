const React = require("react");
function TagIcon({
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
    d: "M5.995 5a.993.993 0 0 0-.704.293A1.003 1.003 0 0 0 5.995 7h.01a.993.993 0 0 0 .704-.293A1.003 1.003 0 0 0 6.005 5z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.75 2A2.75 2.75 0 0 0 2 4.75v6.422c0 .729.29 1.428.805 1.944l8 8a2.75 2.75 0 0 0 3.89 0l6.421-6.421a2.75 2.75 0 0 0 0-3.89l-8-8A2.75 2.75 0 0 0 11.172 2zM3.5 4.75c0-.69.56-1.25 1.25-1.25h6.422c.331 0 .649.132.883.366l8 8a1.251 1.251 0 0 1 0 1.768l-6.421 6.421a1.251 1.251 0 0 1-1.768 0l-8-8a1.25 1.25 0 0 1-.366-.883z"
  }));
}
const ForwardRef = React.forwardRef(TagIcon);
module.exports = ForwardRef;