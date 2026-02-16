const React = require("react");
function CameraIcon({
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
    d: "M8 5.25a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.056 1.696A1.25 1.25 0 0 1 6.176 1h3.648c.475 0 .91.27 1.12.696l.54 1.093 1.457.124A2.25 2.25 0 0 1 15 5.155v6.595A2.25 2.25 0 0 1 12.75 14h-9.5A2.25 2.25 0 0 1 1 11.75V5.155a2.25 2.25 0 0 1 2.059-2.242l1.456-.124zm1.276.804-.66 1.333a.75.75 0 0 1-.608.414l-1.878.16a.75.75 0 0 0-.686.748v6.595c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75V5.155a.75.75 0 0 0-.686-.748l-1.878-.16a.75.75 0 0 1-.608-.414L9.668 2.5z"
  }));
}
const ForwardRef = React.forwardRef(CameraIcon);
module.exports = ForwardRef;