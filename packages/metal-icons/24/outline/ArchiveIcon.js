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
    d: "M9.75 11c-.19891 0-.38968.079-.53033.2197C9.07902 11.3603 9 11.5511 9 11.75s.07902.3897.21967.5303c.14065.1407.33142.2197.53033.2197h4.5c.1989 0 .3897-.079.5303-.2197.1407-.1406.2197-.3314.2197-.5303s-.079-.3897-.2197-.5303C14.6397 11.079 14.4489 11 14.25 11z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M1 4.25c0-.59674.23705-1.16903.65901-1.59099S2.65326 2 3.25 2h17.5c.5967 0 1.169.23705 1.591.65901.4219.42196.659.99425.659 1.59099v1.5c0 .78-.397 1.467-1 1.871V19.25c0 .7293-.2897 1.4288-.8055 1.9445-.5157.5158-1.2152.8055-1.9445.8055H4.75c-.72935 0-1.42882-.2897-1.94454-.8055C2.28973 20.6788 2 19.9793 2 19.25V7.621c-.30781-.20546-.56014-.48373-.73459-.81012S.999796 6.12008 1 5.75zM3.5 8h17v11.25c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25zm-.25-4.5c-.19891 0-.38968.07902-.53033.21967S2.5 4.05109 2.5 4.25v1.5c0 .414.336.75.75.75h17.5c.1989 0 .3897-.07902.5303-.21967.1407-.14065.2197-.33142.2197-.53033v-1.5c0-.19891-.079-.38968-.2197-.53033C21.1397 3.57902 20.9489 3.5 20.75 3.5z"
  }));
}
const ForwardRef = React.forwardRef(ArchiveIcon);
module.exports = ForwardRef;