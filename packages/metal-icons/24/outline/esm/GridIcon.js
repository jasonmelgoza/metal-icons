import * as React from "react";
function GridIcon({
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
    d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v5.5c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 11 9.25v-5.5A1.75 1.75 0 0 0 9.25 2zM3.5 3.75a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v5.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25zM14.75 2A1.75 1.75 0 0 0 13 3.75v5.5c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 22 9.25v-5.5A1.75 1.75 0 0 0 20.25 2zm-.25 1.75a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v5.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25zm-1.5 11c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 22h-5.5A1.75 1.75 0 0 1 13 20.25zm1.75-.25a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25zm-11-1.5A1.75 1.75 0 0 0 2 14.75v5.5c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 11 20.25v-5.5A1.75 1.75 0 0 0 9.25 13zm-.25 1.75a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v5.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25z"
  }));
}
const ForwardRef = React.forwardRef(GridIcon);
export default ForwardRef;