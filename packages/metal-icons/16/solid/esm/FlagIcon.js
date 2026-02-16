import * as React from "react";
function FlagIcon({
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
    d: "M10.557 2.964c.668.112 1.652-.074 3.231-1.309a.75.75 0 0 1 1.212.59v9.005a.75.75 0 0 1-.288.59c-1.734 1.357-3.141 1.819-4.403 1.607-1.178-.198-2.054-.971-2.746-1.583l-.06-.052c-.766-.676-1.343-1.16-2.06-1.28-.627-.105-1.53.052-2.943 1.09v3.628a.75.75 0 1 1-1.5 0V2.246a.75.75 0 0 1 .288-.59C3.022.298 4.429-.164 5.691.048c1.178.198 2.054.971 2.746 1.583l.06.051c.766.677 1.343 1.16 2.06 1.28Z"
  }));
}
const ForwardRef = React.forwardRef(FlagIcon);
export default ForwardRef;