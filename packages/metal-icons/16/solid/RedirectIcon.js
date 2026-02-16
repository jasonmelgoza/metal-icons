const React = require("react");
function RedirectIcon({
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
    d: "M8 3.517a1 1 0 0 1 1.62-.784l5.348 4.233a1 1 0 0 1 0 1.568L9.62 12.767A1 1 0 0 1 8 11.983v-1.545c-.76-.043-1.484.003-2.254.218-.994.279-2.118.857-3.506 1.99a.993.993 0 0 1-1.13.096.962.962 0 0 1-.444-1.099c.415-1.5 1.425-3.141 2.808-4.412C4.69 6.114 6.244 5.241 8 5.042z"
  }));
}
const ForwardRef = React.forwardRef(RedirectIcon);
module.exports = ForwardRef;