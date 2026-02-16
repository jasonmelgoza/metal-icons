import * as React from "react";
function ActivityIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.016 1a.75.75 0 0 1 .698.521l3.306 10.33 1.47-4.341A.75.75 0 0 1 12.2 7H15a.75.75 0 1 1 0 1.5h-2.262l-2.028 5.99a.75.75 0 0 1-1.424-.011L5.952 4.06 4.504 8.008A.75.75 0 0 1 3.8 8.5H1A.75.75 0 0 1 1 7h2.276l2.02-5.508A.75.75 0 0 1 6.016 1"
  }));
}
const ForwardRef = React.forwardRef(ActivityIcon);
export default ForwardRef;