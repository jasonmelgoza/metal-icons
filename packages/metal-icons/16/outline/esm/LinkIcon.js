import * as React from "react";
function LinkIcon({
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
    d: "M11.141 1a3.893 3.893 0 0 0-2.738 1.093L7.314 3.175A.75.75 0 1 0 8.372 4.24L9.45 3.17a2.393 2.393 0 0 1 3.384 3.382l-1.88 1.88a2.394 2.394 0 0 1-3.609-.258.75.75 0 0 0-1.202.899 3.893 3.893 0 0 0 5.87.42l1.886-1.886.01-.009A3.893 3.893 0 0 0 11.141 1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.02 5.365a3.893 3.893 0 0 0-3.033 1.13L2.092 8.392a3.893 3.893 0 0 0 5.505 5.504l1.084-1.084a.75.75 0 0 0-1.06-1.06l-1.07 1.07a2.393 2.393 0 0 1-3.384-3.384l1.881-1.88a2.393 2.393 0 0 1 3.609.258.75.75 0 1 0 1.2-.899A3.893 3.893 0 0 0 7.02 5.365"
  }));
}
const ForwardRef = React.forwardRef(LinkIcon);
export default ForwardRef;