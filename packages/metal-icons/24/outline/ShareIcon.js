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
    d: "M8.295 6.765a.75.75 0 1 1-1.09-1.03l4.25-4.5a.75.75 0 0 1 1.09 0l4.25 4.5a.75.75 0 0 1-1.09 1.03L12.75 3.636V14.25a.75.75 0 1 1-1.5 0V3.636z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.75 10.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H15.5a.75.75 0 1 1 0-1.5h2.75A2.75 2.75 0 0 1 21 11.75v8.5A2.75 2.75 0 0 1 18.25 23H5.75A2.75 2.75 0 0 1 3 20.25v-8.5A2.75 2.75 0 0 1 5.75 9H8.5a.75.75 0 0 1 0 1.5z"
  }));
}
const ForwardRef = React.forwardRef(ShareIcon);
module.exports = ForwardRef;