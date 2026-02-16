import * as React from "react";
function PhoneIcon({
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
    d: "M4.39.001a2.21 2.21 0 0 1 2.205 1.895v.007a8.63 8.63 0 0 0 .47 1.88l-.001-.001a2.202 2.202 0 0 1-.497 2.327l-.003.003-.51.509a10.903 10.903 0 0 0 3.314 3.306l.514-.514a2.21 2.21 0 0 1 2.327-.496c.609.226 1.24.384 1.884.468l.007.001a2.21 2.21 0 0 1 1.9 2.239q-.0075 1.08 0 2.16a2.202 2.202 0 0 1-2.407 2.206l-.014-.001a15.196 15.196 0 0 1-6.618-2.35c-1.981-1.282-3.306-2.6-4.596-4.587A15.131 15.131 0 0 1 .01 2.416v-.012A2.202 2.202 0 0 1 2.207 0H4.39z"
  }));
}
const ForwardRef = React.forwardRef(PhoneIcon);
export default ForwardRef;