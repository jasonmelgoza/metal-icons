const React = require("react");
function ServerIcon({
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
    d: "M13.25 9c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25v-2.5C1 9.784 1.784 9 2.75 9zm-10.5 1.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h7.75v-3zm9.25 3h1.25a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H12zM13.25 1c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 7H2.75A1.75 1.75 0 0 1 1 5.25v-2.5C1 1.784 1.784 1 2.75 1zM12 5.5h1.25a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H12zm-9.25-3a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h7.75v-3z"
  }));
}
const ForwardRef = React.forwardRef(ServerIcon);
module.exports = ForwardRef;