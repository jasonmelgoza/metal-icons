import * as React from "react";
function CloudDownloadIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "currentColor",
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.204 1.329a5.197 5.197 0 0 1 1.829.005c.603.11 1.18.325 1.697.639a4.58 4.58 0 0 1 1.318 1.194c.352.478.6 1.017.724 1.589.059.27.09.545.092.82a3.25 3.25 0 0 1-.115 6.499.75.75 0 0 1 0-1.5 1.751 1.751 0 0 0 0-3.502h-.715a.75.75 0 0 1-.731-.914c.08-.358.081-.726.003-1.084a2.67 2.67 0 0 0-.465-1.017 3.082 3.082 0 0 0-.887-.802 3.512 3.512 0 0 0-1.19-.447 3.697 3.697 0 0 0-1.3-.003c-.43.076-.834.226-1.192.44-.724.432-1.204 1.09-1.366 1.812a.75.75 0 0 1-.762.585 2.64 2.64 0 0 0-1.65.492 2.385 2.385 0 0 0-.926 1.35 2.27 2.27 0 0 0 .183 1.589c.253.496.683.9 1.223 1.135a.75.75 0 1 1-.6 1.375A3.975 3.975 0 0 1 .415 9.756a3.77 3.77 0 0 1-.302-2.634A3.887 3.887 0 0 1 1.616 4.92a4.123 4.123 0 0 1 1.998-.756c.349-.91 1.016-1.684 1.888-2.205a5.017 5.017 0 0 1 1.702-.63m.543 5.673a.75.75 0 0 1 .75.75v4.62l.864-.863a.75.75 0 1 1 1.06 1.06l-2.143 2.144a.75.75 0 0 1-1.061 0L5.073 12.57a.75.75 0 0 1 1.06-1.06l.864.862v-4.62a.75.75 0 0 1 .75-.75"
  }));
}
const ForwardRef = React.forwardRef(CloudDownloadIcon);
export default ForwardRef;