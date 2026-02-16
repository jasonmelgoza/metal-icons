import * as React from "react";
function RedirectIcon({
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
    d: "M12 5.786c0-1.046 1.21-1.63 2.028-.978l7.45 5.922c.627.498.63 1.45.005 1.952l-7.45 5.997c-.817.659-2.033.076-2.033-.974v-2.753c-.96-.045-1.92.1-2.824.427-1.306.456-2.918 1.342-5.295 2.98a1.226 1.226 0 0 1-1.37.03 1.168 1.168 0 0 1-.479-1.327c.59-1.999 1.91-4.124 3.743-5.754C7.445 9.823 9.571 8.72 12 8.529zm1.5.518V9.25a.75.75 0 0 1-.75.75c-2.296 0-4.35.98-5.978 2.428-1.36 1.21-2.393 2.723-2.994 4.188 2.03-1.356 3.565-2.186 4.903-2.653 1.53-.535 2.77-.584 4.137-.46a.75.75 0 0 1 .682.747v2.933l6.8-5.474z"
  }));
}
const ForwardRef = React.forwardRef(RedirectIcon);
export default ForwardRef;