import * as React from "react";
function MailIcon({
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
    d: "M22.482 4.144A2.75 2.75 0 0 0 20.25 3H3.75a2.75 2.75 0 0 0-2.232 1.144L12 12.062zM1 17.94V5.75c0-.04 0-.079.003-.118L8 10.937z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.607 19.667A2.747 2.747 0 0 1 20.25 21H3.75a2.75 2.75 0 0 1-2.357-1.333l7.82-7.819L11.55 13.6a.75.75 0 0 0 .9 0l2.337-1.753zm.39-14.034L23 5.75v12.19l-7-7.003z"
  }));
}
const ForwardRef = React.forwardRef(MailIcon);
export default ForwardRef;