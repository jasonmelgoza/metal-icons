import * as React from "react";
function CircleArrowLeftIcon({
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
    d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m5.78 11.52a.75.75 0 0 0-.53-1.28H8.636l3.129-2.956a.75.75 0 0 0-1.03-1.09l-4.498 4.248a.749.749 0 0 0-.237.535v.012l.001.012a.747.747 0 0 0 .234.533l4.5 4.25a.75.75 0 0 0 1.03-1.09L8.636 12.74h8.614a.75.75 0 0 0 .53-.22"
  }));
}
const ForwardRef = React.forwardRef(CircleArrowLeftIcon);
export default ForwardRef;