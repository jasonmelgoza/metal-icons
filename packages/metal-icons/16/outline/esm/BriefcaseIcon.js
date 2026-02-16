import * as React from "react";
function BriefcaseIcon({
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
    d: "M5.75 1A1.75 1.75 0 0 0 4 2.75V4H2.25A2.25 2.25 0 0 0 0 6.25v6.5A2.25 2.25 0 0 0 2.25 15h11.5A2.25 2.25 0 0 0 16 12.75v-6.5A2.25 2.25 0 0 0 13.75 4H12V2.75A1.75 1.75 0 0 0 10.25 1zm6.75 12.5h1.25a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H12.5zm-1.5-8v8H5v-8zm-7.5 8v-8H2.25a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75zm7-9.5V2.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25V4z"
  }));
}
const ForwardRef = React.forwardRef(BriefcaseIcon);
export default ForwardRef;