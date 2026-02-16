import * as React from "react";
function CloudDownloadIcon({
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
    d: "M11.292 4.306a6.973 6.973 0 0 1 2.453.006c.81.147 1.583.437 2.275.856a6.11 6.11 0 0 1 1.758 1.594c.469.635.797 1.35.961 2.108.1.455.138.919.116 1.38H19a4.25 4.25 0 0 1 0 8.5.75.75 0 0 1 0-1.5 2.75 2.75 0 1 0 0-5.5h-1a.75.75 0 0 1-.732-.914 3.805 3.805 0 0 0 .006-1.647 4.034 4.034 0 0 0-.703-1.537 4.612 4.612 0 0 0-1.328-1.2 5.214 5.214 0 0 0-1.766-.664 5.473 5.473 0 0 0-1.925-.005 5.222 5.222 0 0 0-1.77.654c-1.078.643-1.804 1.631-2.05 2.727a.75.75 0 0 1-.762.585 3.995 3.995 0 0 0-2.496.745 3.64 3.64 0 0 0-1.413 2.06 3.477 3.477 0 0 0 .281 2.432A3.763 3.763 0 0 0 5.2 16.712a.75.75 0 1 1-.6 1.375 5.262 5.262 0 0 1-2.594-2.42 4.977 4.977 0 0 1-.4-3.476 5.14 5.14 0 0 1 1.989-2.913c.829-.6 1.815-.95 2.837-1.02.442-1.282 1.358-2.379 2.58-3.11a6.715 6.715 0 0 1 2.28-.842M12 12.25a.75.75 0 0 1 .75.75v7.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V13a.75.75 0 0 1 .75-.75"
  }));
}
const ForwardRef = React.forwardRef(CloudDownloadIcon);
export default ForwardRef;