const React = require("react");
function MailIcon({
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
    d: "M1 5.75A2.75 2.75 0 0 1 3.75 3h16.5A2.75 2.75 0 0 1 23 5.75v12.5A2.75 2.75 0 0 1 20.25 21H3.75A2.75 2.75 0 0 1 1 18.25zM3.75 4.5a1.25 1.25 0 0 0-1.057.582L12 12.062l9.307-6.98A1.25 1.25 0 0 0 20.25 4.5zM2.5 16.44V6.812l5.501 4.125zm.031 2.09c.127.555.625.97 1.219.97h16.5a1.25 1.25 0 0 0 1.219-.97l-6.682-6.683L12.45 13.6a.75.75 0 0 1-.9 0l-2.337-1.752-6.682 6.681zM16 10.937l5.5 5.503V6.813l-5.501 4.125z"
  }));
}
const ForwardRef = React.forwardRef(MailIcon);
module.exports = ForwardRef;