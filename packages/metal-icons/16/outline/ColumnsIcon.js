const React = require("react");
function ColumnsIcon({
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
    d: "M1 2.75C1 1.783 1.784 1 2.75 1h2.5C6.216 1 7 1.784 7 2.75v10.5A1.75 1.75 0 0 1 5.25 15h-2.5A1.75 1.75 0 0 1 1 13.25zm1.75-.25h2.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25V2.75a.25.25 0 0 1 .25-.25M9 2.75C9 1.783 9.784 1 10.75 1h2.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15h-2.5A1.75 1.75 0 0 1 9 13.25zm1.75-.25h2.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25V2.75a.25.25 0 0 1 .25-.25"
  }));
}
const ForwardRef = React.forwardRef(ColumnsIcon);
module.exports = ForwardRef;