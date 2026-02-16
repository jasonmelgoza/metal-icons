import * as React from "react";
function CircleCaretRightIcon({
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
    d: "M2.5 12a9.5 9.5 0 1 0 19 0 9.5 9.5 0 0 0-19 0M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.709 12.574c.388-.258.388-.888 0-1.146L10.9 8.095c-.397-.265-.901.056-.901.573v6.664c0 .517.504.838.901.573l4.808-3.33Z"
  }));
}
const ForwardRef = React.forwardRef(CircleCaretRightIcon);
export default ForwardRef;