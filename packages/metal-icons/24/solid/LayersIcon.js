const React = require("react");
function LayersIcon({
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
    d: "M11.658 1.082a.75.75 0 0 1 .684 0l10.25 5.25a.75.75 0 0 1 0 1.336l-10.25 5.25a.749.749 0 0 1-.684 0l-10.25-5.25a.75.75 0 0 1 0-1.336z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.089 16.395a.75.75 0 0 1 1.016-.306L12 21.399l9.895-5.31a.75.75 0 0 1 .71 1.322l-10.25 5.5a.75.75 0 0 1-.71 0l-10.25-5.5a.75.75 0 0 1-.306-1.016"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.534 11.032a.75.75 0 0 1 .571.057L12 16.399l9.895-5.31a.75.75 0 0 1 .71 1.322l-10.25 5.5a.75.75 0 0 1-.71 0l-10.25-5.5a.75.75 0 0 1 .139-1.38Z"
  }));
}
const ForwardRef = React.forwardRef(LayersIcon);
module.exports = ForwardRef;