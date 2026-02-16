const React = require("react");
function PaperclipIcon({
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
    d: "M16.072 2.5c-.868 0-1.7.342-2.31.949l-9.22 9.14A5.195 5.195 0 0 0 3 16.28c0 1.383.554 2.71 1.542 3.69a5.299 5.299 0 0 0 3.73 1.531c1.4 0 2.742-.552 3.73-1.532l9.22-9.14a.75.75 0 0 1 1.056 1.065l-9.22 9.14A6.799 6.799 0 0 1 8.273 23a6.799 6.799 0 0 1-4.786-1.966A6.696 6.696 0 0 1 1.5 16.279c0-1.785.715-3.495 1.986-4.755l9.219-9.14A4.783 4.783 0 0 1 16.072 1c1.262 0 2.473.497 3.367 1.383a4.715 4.715 0 0 1 1.398 3.348c0 1.257-.504 2.46-1.398 3.347l-9.23 9.14a2.766 2.766 0 0 1-3.894 0 2.732 2.732 0 0 1 0-3.88l8.517-8.434a.75.75 0 0 1 1.055 1.066l-8.516 8.434a1.231 1.231 0 0 0 0 1.75 1.266 1.266 0 0 0 1.783 0l9.229-9.141a3.214 3.214 0 0 0 .954-2.282 3.21 3.21 0 0 0-.954-2.282 3.283 3.283 0 0 0-2.311-.949"
  }));
}
const ForwardRef = React.forwardRef(PaperclipIcon);
module.exports = ForwardRef;