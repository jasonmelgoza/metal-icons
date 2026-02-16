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
    d: "M6.25 6a.75.75 0 0 1 .75.75v5.5a.75.75 0 1 1-1.5 0v-5.5A.75.75 0 0 1 6.25 6m4.25.75a.75.75 0 1 0-1.5 0v5.5a.75.75 0 1 0 1.5 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4 3v-.75A2.25 2.25 0 0 1 6.25 0h3.5A2.25 2.25 0 0 1 12 2.25V3h2.25a.75.75 0 1 1 0 1.5H14v9.25A2.25 2.25 0 0 1 11.75 16h-7.5A2.25 2.25 0 0 1 2 13.75V4.5h-.25a.75.75 0 0 1 0-1.5zm1.5-.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75V3h-5zm-2 2.25v9.25c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.5z"
  }));
}
const ForwardRef = React.forwardRef(TrashIcon);
module.exports = ForwardRef;