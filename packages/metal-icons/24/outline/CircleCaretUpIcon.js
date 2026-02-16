const React = require("react");
function CircleCaretUpIcon({
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
    d: "M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19m0 1.5c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.574 8.291c-.258-.388-.888-.388-1.146 0L8.095 13.1c-.265.397.056.901.573.901h6.664c.517 0 .838-.504.573-.901l-3.33-4.808Z"
  }));
}
const ForwardRef = React.forwardRef(CircleCaretUpIcon);
module.exports = ForwardRef;