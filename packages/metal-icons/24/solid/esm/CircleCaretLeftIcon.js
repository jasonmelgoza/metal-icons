import * as React from "react";
function CircleCaretLeftIcon({
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
    d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M8.291 11.426c-.388.258-.388.888 0 1.146l4.808 3.333c.397.265.901-.056.901-.573V8.668c0-.517-.504-.838-.901-.573l-4.808 3.33Z"
  }));
}
const ForwardRef = React.forwardRef(CircleCaretLeftIcon);
export default ForwardRef;