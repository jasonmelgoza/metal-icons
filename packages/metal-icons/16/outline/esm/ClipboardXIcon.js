import * as React from "react";
function ClipboardXIcon({
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
    d: "M10.78 7.28a.75.75 0 1 0-1.06-1.06L8 7.94 6.28 6.22a.75.75 0 0 0-1.06 1.06L6.94 9l-1.72 1.72a.75.75 0 1 0 1.06 1.06L8 10.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L9.06 9z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.75 1h-.775c-.115-.57-.62-1-1.225-1h-5.5a1.25 1.25 0 0 0-1.225 1H3.25A2.25 2.25 0 0 0 1 3.25v10.5A2.25 2.25 0 0 0 3.25 16h9.5A2.25 2.25 0 0 0 15 13.75V3.25A2.25 2.25 0 0 0 12.75 1m-9.5 1.5H4v.75c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25V2.5h.75a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75V3.25a.75.75 0 0 1 .75-.75m2.25-1V3h5V1.5z"
  }));
}
const ForwardRef = React.forwardRef(ClipboardXIcon);
export default ForwardRef;