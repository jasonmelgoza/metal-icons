const React = require("react");
function TrashIcon({
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
    d: "M4 2.25V3H1.75a.75.75 0 0 0 0 1.5H2v9.25A2.25 2.25 0 0 0 4.25 16h7.5A2.25 2.25 0 0 0 14 13.75V4.5h.25a.75.75 0 1 0 0-1.5H12v-.75A2.25 2.25 0 0 0 9.75 0h-3.5A2.25 2.25 0 0 0 4 2.25m1.72-.53a.75.75 0 0 0-.22.53V3h5v-.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.53.22m1.06 4.5a.75.75 0 0 0-1.28.53v5.5a.75.75 0 1 0 1.5 0v-5.5a.75.75 0 0 0-.22-.53m3.5 0c.141.14.22.331.22.53v5.5a.75.75 0 1 1-1.5 0v-5.5a.75.75 0 0 1 1.28-.53"
  }));
}
const ForwardRef = React.forwardRef(TrashIcon);
module.exports = ForwardRef;