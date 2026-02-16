const React = require("react");
function GridPlusIcon({
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
    d: "M3.75 22A1.75 1.75 0 0 1 2 20.25v-5.5c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 9.25 22zm-.25-1.75c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25zM14.75 22A1.75 1.75 0 0 1 13 20.25v-5.5c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 22zm-.25-1.75c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25zM3.75 11A1.75 1.75 0 0 1 2 9.25v-5.5C2 2.784 2.784 2 3.75 2h5.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 9.25 11zM3.5 9.25c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.25 10.25a.75.75 0 1 1-1.5 0v-3h-3a.75.75 0 1 1 0-1.5h3v-3a.75.75 0 1 1 1.5 0v3h3a.75.75 0 1 1 0 1.5h-3z"
  }));
}
const ForwardRef = React.forwardRef(GridPlusIcon);
module.exports = ForwardRef;