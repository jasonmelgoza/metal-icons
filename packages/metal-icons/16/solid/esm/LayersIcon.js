import * as React from "react";
function LayersIcon({
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
    d: "M7.656.084a.75.75 0 0 1 .69 0l7.25 3.75a.75.75 0 0 1 0 1.332l-7.25 3.75a.75.75 0 0 1-.69 0l-7.25-3.75a.75.75 0 0 1 0-1.332z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.093 10.887a.752.752 0 0 1 1.02-.294L8 14.393l6.888-3.8a.75.75 0 1 1 .724 1.313l-7.25 4a.75.75 0 0 1-.724 0l-7.25-4a.75.75 0 0 1-.295-1.019"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.55 7.042a.75.75 0 0 1 .562.051L8 10.893l6.888-3.8a.75.75 0 0 1 .724 1.313l-7.25 4a.75.75 0 0 1-.724 0l-7.25-4A.75.75 0 0 1 .55 7.042"
  }));
}
const ForwardRef = React.forwardRef(LayersIcon);
export default ForwardRef;