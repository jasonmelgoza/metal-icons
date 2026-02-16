const React = require("react");
function ShoppingCartIcon({
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
    d: "M.72 1.72a.75.75 0 0 1 .53-.22h2.09a2.75 2.75 0 0 1 2.702 2.245L6.276 5h14.596a2.75 2.75 0 0 1 2.709 3.221l-1.303 7.5A2.75 2.75 0 0 1 19.568 18H9.426a2.75 2.75 0 0 1-2.708-2.269l-.706-3.971-1.444-7.74A1.25 1.25 0 0 0 3.339 3H1.25a.75.75 0 0 1-.53-1.28M6.556 6.5l.932 4.994.708 3.975a1.25 1.25 0 0 0 1.23 1.031h10.142a1.25 1.25 0 0 0 1.231-1.036l1.305-7.5A1.25 1.25 0 0 0 20.872 6.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.987 21.987A1.75 1.75 0 0 0 9.75 19h-.01a1.75 1.75 0 0 0 0 3.5h.01c.464 0 .91-.184 1.237-.513m10 0A1.75 1.75 0 0 0 19.75 19h-.01a1.75 1.75 0 1 0 0 3.5h.01c.464 0 .91-.184 1.237-.513"
  }));
}
const ForwardRef = React.forwardRef(ShoppingCartIcon);
module.exports = ForwardRef;