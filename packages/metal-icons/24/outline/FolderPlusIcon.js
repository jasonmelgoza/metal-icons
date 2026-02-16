const React = require("react");
function FolderPlusIcon({
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
    d: "m12.195 3.634-.829-.829A2.75 2.75 0 0 0 9.422 2H3.75A2.75 2.75 0 0 0 1 4.75v14.5A2.75 2.75 0 0 0 3.75 22h16.5A2.75 2.75 0 0 0 23 19.25V6.75A2.75 2.75 0 0 0 20.25 4h-7.172a1.25 1.25 0 0 1-.883-.366M9.422 3.5H3.75A1.25 1.25 0 0 0 2.5 4.75v14.5a1.25 1.25 0 0 0 1.25 1.25h16.5a1.25 1.25 0 0 0 1.25-1.25V6.75a1.25 1.25 0 0 0-1.25-1.25h-7.172c-.729 0-1.428-.29-1.944-.805l-.828-.83a1.251 1.251 0 0 0-.884-.365"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 1 1 0 1.5h-2.25V16a.75.75 0 1 1-1.5 0v-2.25H9a.75.75 0 1 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75"
  }));
}
const ForwardRef = React.forwardRef(FolderPlusIcon);
module.exports = ForwardRef;