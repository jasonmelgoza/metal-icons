import * as React from "react";
function SendIcon({
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
    d: "M19.621 1.153a2.517 2.517 0 0 1 3.226 3.225l-5.64 16.891v.001a2.514 2.514 0 0 1-1.815 1.66 2.485 2.485 0 0 1-2.362-.675l-3.046-3.03-3.203 1.656a.75.75 0 0 1-1.094-.686l.133-5.144-4.091-4.09s0 .001 0 0a2.485 2.485 0 0 1-.68-2.248A2.514 2.514 0 0 1 2.71 6.791l.005-.002zM7.319 15.107l-.1 3.86 2.562-1.325a.75.75 0 0 1 .874.135l3.444 3.426a.984.984 0 0 0 .94.268l.01-.002a1.017 1.017 0 0 0 .734-.67v-.002l5.645-16.905a1.013 1.013 0 0 0 .052-.58L7.32 15.107Zm12.652-12.49L3.195 8.21l-.003.001a1.016 1.016 0 0 0-.668.779l-.004.017a.982.982 0 0 0 .268.893l3.836 3.833z"
  }));
}
const ForwardRef = React.forwardRef(SendIcon);
export default ForwardRef;