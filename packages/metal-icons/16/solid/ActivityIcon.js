const React = require("react");
function ActivityIcon({
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
    fillRule: "evenodd",
    d: "M6.016 1c.1561.00338.30726.0554.43238.14879.12513.0934.21798.22352.26562.37221l3.306 10.33 1.47-4.341c.0502-.14856.1457-.27766.273-.36914.1274-.09148.2802-.14074.437-.14086H15c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033s-.079.38968-.2197.53033C15.3897 8.42098 15.1989 8.5 15 8.5h-2.262l-2.028 5.99c-.0507.1493-.1472.2789-.2757.3702-.1285.0914-.2826.1399-.44027.1386-.15769-.0012-.31097-.0521-.43808-.1454s-.22156-.2243-.26995-.3744L5.952 4.06 4.504 8.008c-.05284.14423-.14869.26876-.2746.35675S3.95361 8.49995 3.8 8.5H1c-.198912 0-.389678-.07902-.53033-.21967S.25 7.94891.25 7.75s.079018-.38968.21967-.53033S.801088 7 1 7h2.276l2.02-5.508c.11-.301.4-.499.72-.492"
  }));
}
const ForwardRef = React.forwardRef(ActivityIcon);
module.exports = ForwardRef;