import * as React from "react";
function HeadphonesIcon({
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
    d: "M12 3.5c-2.26 0-4.425.874-6.018 2.424A8.128 8.128 0 0 0 3.5 11.75V13h2.75A2.75 2.75 0 0 1 9 15.75v3.5A2.75 2.75 0 0 1 6.25 22h-1.5A2.75 2.75 0 0 1 2 19.25v-7.5a9.628 9.628 0 0 1 2.936-6.902A10.132 10.132 0 0 1 12 2c2.646 0 5.187 1.022 7.064 2.848A9.631 9.631 0 0 1 22 11.75v7.5A2.75 2.75 0 0 1 19.25 22h-1.5A2.75 2.75 0 0 1 15 19.25v-3.5A2.75 2.75 0 0 1 17.75 13h2.75v-1.25c0-2.181-.89-4.278-2.482-5.826A8.632 8.632 0 0 0 12 3.5"
  }));
}
const ForwardRef = React.forwardRef(HeadphonesIcon);
export default ForwardRef;