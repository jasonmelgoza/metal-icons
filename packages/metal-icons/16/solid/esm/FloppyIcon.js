import * as React from "react";
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
    d: "M1.659 2.159A2.25 2.25 0 0 0 1 3.75v9.5a2.25 2.25 0 0 0 2.25 2.25h9.5A2.25 2.25 0 0 0 15 13.25V6.371c0-.596-.237-1.169-.659-1.591l-2.622-2.621a2.25 2.25 0 0 0-1.59-.659H3.25a2.25 2.25 0 0 0-1.591.659M9 3H5v2a.5.5 0 0 0 .5.5h3A.5.5 0 0 0 9 5zM4.95 14h6.1v-3.55a1 1 0 0 0-1-1h-4.1a1 1 0 0 0-1 1z"
  }));
}
const ForwardRef = React.forwardRef(FloppyIcon);
export default ForwardRef;