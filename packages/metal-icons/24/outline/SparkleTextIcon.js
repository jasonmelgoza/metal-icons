const React = require("react");
function SparkleTextIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M2.75 3a.75.75 0 0 0 0 1.5h18.5a.75.75 0 1 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 1 0 0-1.5zM2 13.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75M2.75 18a.75.75 0 1 0 0 1.5h7.5a.75.75 0 1 0 0-1.5zM17 11a.5.5 0 0 1 .475.344l.957 2.909a.5.5 0 0 0 .322.321l.002.001 2.9.95a.501.501 0 0 1 0 .95l-.35.114-2.559.843a.5.5 0 0 0-.321.322l-.001.002-.835 2.55-.59.193V21a.5.5 0 0 1-.444-.27l-.03-.074-.958-2.909a.5.5 0 0 0-.322-.321l-.002-.001-2.9-.95a.501.501 0 0 1 0-.95l2.909-.957a.502.502 0 0 0 .106-.05l.093-.072a.5.5 0 0 0 .073-.092l.05-.108v-.002l.95-2.9A.501.501 0 0 1 17 11m.476 9.655-.032.075A.5.5 0 0 1 17 21v-.501l.59-.193-.114.35Zm-.474-5.948a2.003 2.003 0 0 1-1.282 1.285v.001l-.015.005h.002c.226.073.436.186.622.332l.177.157.157.177a2 2 0 0 1 .33.615l.005.015.086-.222a2 2 0 0 1 .403-.578l.177-.157a2 2 0 0 1 .615-.33l.015-.005a2.006 2.006 0 0 1-1.29-1.287z"
  }));
}
const ForwardRef = React.forwardRef(SparkleTextIcon);
module.exports = ForwardRef;