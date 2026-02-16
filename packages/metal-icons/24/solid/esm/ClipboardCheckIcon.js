import * as React from "react";
function ClipboardCheckIcon({
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
    d: "M7.513 1.513A1.75 1.75 0 0 1 8.75 1h6.5A1.75 1.75 0 0 1 17 2.75V3h1.25A2.75 2.75 0 0 1 21 5.75v14.5A2.75 2.75 0 0 1 18.25 23H5.75A2.75 2.75 0 0 1 3 20.25V5.75A2.75 2.75 0 0 1 5.75 3H7v-.25c0-.464.184-.91.513-1.237m1.06 1.06a.25.25 0 0 0-.073.177v1.5a.25.25 0 0 0 .25.25h6.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.177.073m8.188 7.146a.75.75 0 0 0-1.06 0l-5.47 5.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06"
  }));
}
const ForwardRef = React.forwardRef(ClipboardCheckIcon);
export default ForwardRef;