import * as React from "react";
function FilterIcon({
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
    d: "M20.722 7.472c.258-.258.403-.607.403-.972V3.75A2.75 2.75 0 0 0 18.375 1H5.75A2.75 2.75 0 0 0 3 3.75V6.5c0 .365.145.714.403.972L9 14v8a1 1 0 0 0 1 1h1.5a1 1 0 0 0 .8-.4L15 19v-5zM13.5 18.5v-5.064l6.125-6.988V3.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v2.698l.004.004 5.996 6.993V21.5h.75z"
  }));
}
const ForwardRef = React.forwardRef(FilterIcon);
export default ForwardRef;