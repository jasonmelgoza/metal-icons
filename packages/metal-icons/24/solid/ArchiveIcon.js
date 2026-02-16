const React = require("react");
function ArchiveIcon({
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
    d: "M1 4.25c0-.59674.23705-1.16903.65901-1.59099S2.65326 2 3.25 2h17.5c.5967 0 1.169.23705 1.591.65901.4219.42196.659.99425.659 1.59099v1.5c0 .77935-.3963 1.46586-.9985 1.87H1.9985c-.30714-.20536-.55893-.48326-.73309-.80912C1.09096 6.48449.999797 6.12008 1 5.75z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 9h20v10.25c0 .7293-.2897 1.4288-.8055 1.9445-.5157.5158-1.2152.8055-1.9445.8055H4.75c-.72934 0-1.42882-.2897-1.94454-.8055C2.28973 20.6788 2 19.9793 2 19.25zm7.21967 3.2197C9.36032 12.079 9.55109 12 9.75 12h4.5c.1989 0 .3897.079.5303.2197.1407.1406.2197.3314.2197.5303s-.079.3897-.2197.5303c-.1406.1407-.3314.2197-.5303.2197h-4.5c-.19891 0-.38968-.079-.53033-.2197C9.07902 13.1397 9 12.9489 9 12.75s.07902-.3897.21967-.5303"
  }));
}
const ForwardRef = React.forwardRef(ArchiveIcon);
module.exports = ForwardRef;