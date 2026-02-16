import * as React from "react";
function CircleArrowRightIcon({
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
    d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M6.22 12.52a.75.75 0 0 1 .53-1.28h8.614l-3.129-2.956a.75.75 0 0 1 1.03-1.09l4.498 4.248a.749.749 0 0 1 .237.535v.012l-.001.012a.747.747 0 0 1-.234.533l-4.5 4.25a.75.75 0 0 1-1.03-1.09l3.129-2.955H6.75a.75.75 0 0 1-.53-.22Z"
  }));
}
const ForwardRef = React.forwardRef(CircleArrowRightIcon);
export default ForwardRef;