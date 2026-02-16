import * as React from "react";
function FolderIcon({
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
    d: "M.65901 1.65901C1.08097 1.23705 1.65326 1 2.25 1h4.379c.29555.00013.58817.05848.86116.17173.27298.11324.52099.27916.72984.48827l1.121 1.12c.14052.14069.33116.21983.53.22h3.879c.5967 0 1.169.23705 1.591.65901.4219.42196.659.99425.659 1.59099v7.5c0 .5967-.2371 1.169-.659 1.591-.422.4219-.9943.659-1.591.659H2.25c-.59674 0-1.16903-.2371-1.59099-.659C.237053 13.919 0 13.3467 0 12.75v-9.5c0-.59674.237053-1.16903.65901-1.59099M1.5 7v5.749c0 .1989.07902.3897.21967.5303.14065.1407.33142.2197.53033.2197h11.5c.1989 0 .3897-.079.5303-.2197.1407-.1406.2197-.3314.2197-.5303V7zm13-1.5h-13V3.25c0-.19891.07902-.38968.21967-.53033S2.05109 2.5 2.25 2.5h4.379c.19885.00017.38948.07931.53.22L8.28 3.84c.20893.20893.45697.37466.72996.48774.27298.11307.56557.17126.86104.17126h3.879c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033z"
  }));
}
const ForwardRef = React.forwardRef(FolderIcon);
export default ForwardRef;