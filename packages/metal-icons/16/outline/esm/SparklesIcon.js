import * as React from "react";
function SparklesIcon({
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
    d: "M11.713 1.516a.75.75 0 0 0-1.426 0L9.605 3.6l-2.09.688a.75.75 0 0 0 .002 1.425l2.083.682.688 2.09a.75.75 0 0 0 1.425-.002l.682-2.083 2.09-.688a.75.75 0 0 0-.002-1.425L12.4 3.605l-.686-2.09Zm-1.045 3.147c.146-.146.26-.321.333-.514a1.471 1.471 0 0 0 .85.852 1.471 1.471 0 0 0-.852.85 1.471 1.471 0 0 0-.85-.852c.195-.074.372-.188.519-.336M5.212 8.516a.75.75 0 0 0-1.425 0l-.56 1.708-1.711.563a.75.75 0 0 0 0 1.426l1.708.56.564 1.711a.75.75 0 0 0 1.425 0l.56-1.708 1.711-.563a.75.75 0 0 0 0-1.426l-1.708-.56zm-.911 2.78c.077-.076.144-.162.2-.254a1.36 1.36 0 0 0 .457.459 1.36 1.36 0 0 0-.459.457 1.36 1.36 0 0 0-.457-.459 1.36 1.36 0 0 0 .259-.203"
  }));
}
const ForwardRef = React.forwardRef(SparklesIcon);
export default ForwardRef;