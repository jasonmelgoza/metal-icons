const React = require("react");
function ShareIcon({
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
    d: "M10 14.25a2 2 0 1 0 4 0V9h4.25A2.75 2.75 0 0 1 21 11.75v8.5A2.75 2.75 0 0 1 18.25 23H5.75A2.75 2.75 0 0 1 3 20.25v-8.5A2.75 2.75 0 0 1 5.75 9H10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 1a.751.751 0 0 1 .545.235l4.25 4.5a.749.749 0 0 1-1.09 1.03l-2.955-3.13V14.25a.75.75 0 0 1-1.5 0V3.636L8.295 6.765a.75.75 0 0 1-.82.199.75.75 0 0 1-.27-1.229l4.25-4.5A.75.75 0 0 1 12 1"
  }));
}
const ForwardRef = React.forwardRef(ShareIcon);
module.exports = ForwardRef;