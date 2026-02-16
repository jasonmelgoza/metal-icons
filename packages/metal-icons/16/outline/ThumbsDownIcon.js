const React = require("react");
function ThumbsDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 17,
    height: 16,
    fill: "currentColor",
    viewBox: "0 0 17 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "m8.587 14.484 2.56-5.759V1.5H3.672a.75.75 0 0 0-.74.637l-.995 6.55a.75.75 0 0 0 .741.862h3.767c.69 0 1.25.56 1.25 1.25v2.626c0 .53.385.972.892 1.06zM12.647 1.5v6.634h1.286a.75.75 0 0 0 .75-.75V2.25a.75.75 0 0 0-.75-.75zm-.264 8.134-2.51 5.65A1.206 1.206 0 0 1 8.771 16a2.576 2.576 0 0 1-2.576-2.575v-2.376H2.678A2.251 2.251 0 0 1 .454 8.461l.994-6.549A2.25 2.25 0 0 1 3.672 0h10.261a2.25 2.25 0 0 1 2.25 2.25v5.134a2.25 2.25 0 0 1-2.25 2.25z"
  }));
}
const ForwardRef = React.forwardRef(ThumbsDownIcon);
module.exports = ForwardRef;