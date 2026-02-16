import * as React from "react";
function BookOpenIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M7.25 1.486a3.152 3.152 0 0 0-.22-.127c-.384-.202-.795-.284-1.246-.322C5.349 1 4.814 1 4.166 1H2.25A2.25 2.25 0 0 0 0 3.25v7a2.25 2.25 0 0 0 2.25 2.25h2.07c.804 0 1.046.008 1.253.073.208.066.402.173.571.317.173.147.318.358.763 1.047l.343.534zm1.5 12.984.344-.533c.444-.69.59-.9.762-1.047.17-.144.363-.251.57-.316h.001c.207-.066.449-.074 1.254-.074h2.069A2.25 2.25 0 0 0 16 10.25v-7A2.25 2.25 0 0 0 13.75 1h-1.915c-.65 0-1.184 0-1.619.037-.451.038-.863.12-1.247.322-.075.04-.148.082-.219.127v12.985Z"
  }));
}
const ForwardRef = React.forwardRef(BookOpenIcon);
export default ForwardRef;