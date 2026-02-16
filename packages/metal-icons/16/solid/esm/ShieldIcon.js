import * as React from "react";
function ShieldIcon({
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
    d: "M7.26.213c.48-.167 1-.167 1.48 0l4.75 1.653A2.25 2.25 0 0 1 15 3.99V8c0 2.048-1.181 3.747-2.45 4.99-1.282 1.256-2.757 2.15-3.573 2.599a2.023 2.023 0 0 1-1.954 0c-.816-.447-2.291-1.342-3.572-2.598C2.18 11.748 1 10.05 1 8V3.99c0-.956.606-1.81 1.51-2.124z"
  }));
}
const ForwardRef = React.forwardRef(ShieldIcon);
export default ForwardRef;