import * as React from "react";
function ChatBubblesRoundIcon({
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
    d: "M13.02 4.827a5.75 5.75 0 0 0-8.777 7.077c.144.275.134.58.12.751-.022.221-.061.44-.118.655-.14.529-.31 1.048-.512 1.557.563-.214 1.188-.429 1.694-.545a.75.75 0 1 1 .335 1.463c-.535.122-1.3.401-1.96.666-.357.142-.711.29-1.063.445l-.064.029-.016.007-.004.002a.753.753 0 0 1-1.046-.55.75.75 0 0 1 .055-.444v-.002l.003-.006.012-.027a30.002 30.002 0 0 0 .698-1.694c.17-.453.323-.903.413-1.265.046-.183.07-.32.078-.413l.001-.022a7.25 7.25 0 0 1 11.11-8.837.75.75 0 1 1-.959 1.153"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M21.781 20.78a.75.75 0 0 0 .152-.84l-.004-.008-.012-.027a30.29 30.29 0 0 1-.698-1.694c-.16-.414-.298-.836-.413-1.265a2.731 2.731 0 0 1-.077-.414l-.002-.021a7.25 7.25 0 1 0-3.22 3.219h.018c.092.009.23.033.413.08.363.09.814.243 1.268.413.574.215 1.141.447 1.701.695l.027.012.008.004a.75.75 0 0 0 .84-.155v.001Z"
  }));
}
const ForwardRef = React.forwardRef(ChatBubblesRoundIcon);
export default ForwardRef;