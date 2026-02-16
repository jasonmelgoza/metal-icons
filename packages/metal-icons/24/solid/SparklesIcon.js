const React = require("react");
function SparklesIcon({
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
    d: "M17.5 1a.75.75 0 0 1 .712.516l.798 2.425a.083.083 0 0 0 .054.054h.003l2.416.792a.75.75 0 0 1 .001 1.425l-2.425.798a.083.083 0 0 0-.054.054v.003l-.792 2.416a.75.75 0 0 1-1.425.001L15.99 7.06a.083.083 0 0 0-.054-.054h-.003l-2.416-.792a.75.75 0 0 1-.001-1.425l2.425-.798a.083.083 0 0 0 .054-.054v-.003l.792-2.416A.75.75 0 0 1 17.5 1m-8 4a.75.75 0 0 1 .713.516l1.435 4.363a.75.75 0 0 0 .482.482l.003.001 4.35 1.425a.75.75 0 0 1 .001 1.425l-4.363 1.436a.75.75 0 0 0-.482.482l-.001.003-1.425 4.35a.75.75 0 0 1-1.425.001l-1.436-4.363a.75.75 0 0 0-.483-.482l-.002-.001-4.35-1.425a.75.75 0 0 1-.001-1.425l4.363-1.436a.75.75 0 0 0 .482-.483l.001-.002 1.425-4.35A.75.75 0 0 1 9.5 5m7.712 11.016a.75.75 0 0 0-1.425 0l-.62 1.896-1.901.626a.75.75 0 0 0 0 1.425l1.896.62.625 1.901a.75.75 0 0 0 1.426 0l.62-1.896 1.901-.626a.75.75 0 0 0 0-1.425l-1.896-.62z"
  }));
}
const ForwardRef = React.forwardRef(SparklesIcon);
module.exports = ForwardRef;