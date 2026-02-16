const React = require("react");
function FloppyIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 17,
    fill: "currentColor",
    viewBox: "0 0 16 17",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.659 2.159A2.25 2.25 0 0 0 1 3.75v9.5a2.25 2.25 0 0 0 2.25 2.25h9.5A2.25 2.25 0 0 0 15 13.25V6.371c0-.596-.237-1.169-.659-1.591l-2.622-2.621a2.25 2.25 0 0 0-1.59-.659H3.25a2.25 2.25 0 0 0-1.591.659m1.06 1.06A.75.75 0 0 1 3.25 3H4v2.25c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25V3h.13c.199 0 .39.08.53.22l2.62 2.621c.14.14.22.331.22.53v6.879a.75.75 0 0 1-.75.75h-.8V9.75a1.2 1.2 0 0 0-1.2-1.2h-5.5a1.2 1.2 0 0 0-1.2 1.2V14h-.8a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .22-.53ZM8.5 3h-3v2h3zM5.45 14h5.1V9.95h-5.1z"
  }));
}
const ForwardRef = React.forwardRef(FloppyIcon);
module.exports = ForwardRef;