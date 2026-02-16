import * as React from "react";
function ThumbsUpIcon({
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
    d: "M9.973 1.651 6 10v13h12.48a2.75 2.75 0 0 0 2.72-2.337l1.443-9.5A2.75 2.75 0 0 0 19.923 8H14.75a.25.25 0 0 1-.25-.25V4.525A3.526 3.526 0 0 0 10.975 1a1.097 1.097 0 0 0-1.002.651M4.5 23V10h-.75A2.75 2.75 0 0 0 1 12.75v7.5A2.75 2.75 0 0 0 3.75 23z"
  }));
}
const ForwardRef = React.forwardRef(ThumbsUpIcon);
export default ForwardRef;