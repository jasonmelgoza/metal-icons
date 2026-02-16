import * as React from "react";
function AlarmIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M2.907 7.75a10.5 10.5 0 0 1 4.822-4.342l-.61-1.37A12 12 0 0 0 1.608 7zm18.186 0a10.5 10.5 0 0 0-4.822-4.342l.61-1.37A12 12 0 0 1 22.392 7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 3a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-.25 4a.75.75 0 0 1 .75.75v4.822l5.131 3.032a.75.75 0 1 1-.762 1.292L11 13.428V7.75a.75.75 0 0 1 .75-.75"
  }));
}
const ForwardRef = React.forwardRef(AlarmIcon);
export default ForwardRef;