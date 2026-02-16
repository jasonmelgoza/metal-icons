import * as React from "react";
function PenIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M19.497 1c.871 0 1.707.346 2.323.962l.218.218a3.287 3.287 0 0 1 0 4.645L7.351 21.513a.75.75 0 0 1-.348.197l-5.071 1.268a.75.75 0 0 1-.91-.91l1.268-5.07a.75.75 0 0 1 .197-.349L17.175 1.963A3.285 3.285 0 0 1 19.497 1m0 1.5c-.414 0-.813.144-1.13.404l-.132.118-14.54 14.54-.915 3.657 3.656-.914 14.541-14.54.119-.131a1.785 1.785 0 0 0 0-2.263l-.119-.13-.218-.219a1.787 1.787 0 0 0-1.262-.522"
  }));
}
const ForwardRef = React.forwardRef(PenIcon);
export default ForwardRef;