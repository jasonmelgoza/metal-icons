const React = require("react");
function CurrencyDollarIcon({
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
    d: "M12.5 1.75a.75.75 0 1 0-1.5 0V4H9.396c-1.165 0-2.282.46-3.107 1.28a4.365 4.365 0 0 0 0 6.19 4.406 4.406 0 0 0 3.107 1.28H11v5.75H5.75a.75.75 0 1 0 0 1.5H11v2.25a.75.75 0 1 0 1.5 0V20h2.104c1.165 0 2.282-.46 3.107-1.28a4.365 4.365 0 0 0 0-6.19 4.407 4.407 0 0 0-3.107-1.28H12.5V5.5h4.708a.75.75 0 1 0 0-1.5H12.5zM11 5.5H9.396c-.77 0-1.507.304-2.05.844a2.865 2.865 0 0 0 0 4.062c.543.54 1.28.844 2.05.844H11zm1.5 7.25v5.75h2.104c.77 0 1.507-.304 2.05-.844a2.865 2.865 0 0 0 0-4.062 2.906 2.906 0 0 0-2.05-.844z"
  }));
}
const ForwardRef = React.forwardRef(CurrencyDollarIcon);
module.exports = ForwardRef;