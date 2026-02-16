const React = require("react");
function DocumentsIcon({
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
    d: "M6.25 1.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75V6h-1.75A1.75 1.75 0 0 1 10 4.25V1.5zm4.5-1.5h-4.5A2.25 2.25 0 0 0 4 2.25V3h-.75A2.25 2.25 0 0 0 1 5.25v8.5A2.25 2.25 0 0 0 3.25 16h7a2.25 2.25 0 0 0 2.25-2.25V13h.25A2.25 2.25 0 0 0 15 10.75v-5.5a.75.75 0 0 0-.158-.46l-3.5-4.5A.75.75 0 0 0 10.75 0M11 13H6.25A2.25 2.25 0 0 1 4 10.75V4.5h-.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75zm.5-10.064V4.25c0 .138.112.25.25.25h.966z"
  }));
}
const ForwardRef = React.forwardRef(DocumentsIcon);
module.exports = ForwardRef;