import * as React from "react";
function ShoppingBagIcon({
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
    fillRule: "evenodd",
    d: "M5.75 4c0-.874.303-1.468.702-1.845A2.25 2.25 0 0 1 8 1.563a2.25 2.25 0 0 1 1.547.592c.4.377.703.97.703 1.845zm-1.5 0c0-1.25.447-2.25 1.172-2.936A3.75 3.75 0 0 1 8 .062a3.75 3.75 0 0 1 2.577 1.002C11.303 1.75 11.75 2.75 11.75 4h.403a1 1 0 0 1 .986.836l1.376 8.253A2.5 2.5 0 0 1 12.049 16H3.95a2.5 2.5 0 0 1-2.466-2.911L2.86 4.836A1 1 0 0 1 3.847 4z"
  }));
}
const ForwardRef = React.forwardRef(ShoppingBagIcon);
export default ForwardRef;