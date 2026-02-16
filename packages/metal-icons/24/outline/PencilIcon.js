const React = require("react");
function PencilIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M19.497 1c-.87 0-1.706.346-2.323.962l-2.01 2.01L2.487 16.65a.75.75 0 0 0-.197.348l-1.268 5.071a.75.75 0 0 0 .91.91l5.07-1.268a.75.75 0 0 0 .349-.197L22.038 6.826a3.285 3.285 0 0 0 0-4.646l-.218-.218A3.285 3.285 0 0 0 19.497 1M3.695 17.563l12-12 2.741 2.743-11.999 12-3.656.913zM21.5 4.503c0 .473-.188.927-.523 1.262L19.5 7.25l-2.745-2.747 1.48-1.48a1.785 1.785 0 0 1 2.524 0l.218.218c.335.334.523.788.523 1.262"
  }));
}
const ForwardRef = React.forwardRef(PencilIcon);
module.exports = ForwardRef;