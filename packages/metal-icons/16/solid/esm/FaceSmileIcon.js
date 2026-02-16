import * as React from "react";
function FaceSmileIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 0a8 8 0 1 1 .001 16.001A8 8 0 0 1 8 0m2.22 9.02a.751.751 0 0 0-.462.341c-.143.214-.31.41-.5.584-.34.31-.768.555-1.258.555s-.918-.245-1.259-.555a3.217 3.217 0 0 1-.5-.584.751.751 0 0 0-1.361.212.75.75 0 0 0 .077.563c.065.105.136.208.212.305.17.221.359.426.564.614C6.218 11.495 6.99 12 8 12s1.782-.505 2.267-.945c.247-.224.436-.447.564-.614l.212-.305a.75.75 0 0 0-.823-1.115ZM6 5a1 1 0 0 0 0 2h.007a1 1 0 0 0 0-2zm4 0a1 1 0 0 0 0 2h.007a1 1 0 0 0 0-2z"
  }));
}
const ForwardRef = React.forwardRef(FaceSmileIcon);
export default ForwardRef;