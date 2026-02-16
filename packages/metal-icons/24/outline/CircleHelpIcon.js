const React = require("react");
function CircleHelpIcon({
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
    d: "M12.349 7.536c-.612-.1-1.24.01-1.77.31a2.5 2.5 0 0 0-1.125 1.308.75.75 0 1 1-1.408-.516c.33-.89.967-1.634 1.796-2.098a4.212 4.212 0 0 1 2.75-.484c.946.156 1.81.63 2.436 1.343.627.715.973 1.624.972 2.569 0 .636-.127 1.168-.369 1.62a3.13 3.13 0 0 1-.9 1.021 8.427 8.427 0 0 1-.804.519l-.144.085c-.294.177-.526.329-.712.507a1.125 1.125 0 0 0-.298.441.62.62 0 0 0-.028.107l-.001.007a.75.75 0 1 1-1.5-.025c0-.198.047-.394.111-.58a2.63 2.63 0 0 1 .677-1.032c.318-.304.675-.529.98-.712l.177-.104c.22-.124.432-.26.636-.409a1.64 1.64 0 0 0 .484-.533c.107-.2.191-.482.191-.913v-.001c0-.573-.21-1.132-.6-1.578a2.628 2.628 0 0 0-1.551-.852"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19"
  }));
}
const ForwardRef = React.forwardRef(CircleHelpIcon);
module.exports = ForwardRef;