const React = require("react");
function FaceSadIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 0a8 8 0 1 1 .001 16.001A8 8 0 0 1 8 0m0 8.999c-1.01 0-1.782.504-2.267.945a4.723 4.723 0 0 0-.564.614c-.076.097-.147.2-.212.305a.751.751 0 0 0 .822 1.106.752.752 0 0 0 .462-.331c.143-.214.311-.41.5-.584.341-.31.77-.555 1.259-.555.49 0 .918.246 1.258.555.19.173.357.37.5.584a.752.752 0 0 0 1.37-.207.751.751 0 0 0-.085-.568l-.212-.305a4.694 4.694 0 0 0-.564-.614C9.782 9.504 9.01 9 8 9ZM6 5a1 1 0 0 0 0 2h.007a1 1 0 0 0 0-2zm4 0a1 1 0 0 0 0 2h.007a1 1 0 0 0 0-2z"
  }));
}
const ForwardRef = React.forwardRef(FaceSadIcon);
module.exports = ForwardRef;