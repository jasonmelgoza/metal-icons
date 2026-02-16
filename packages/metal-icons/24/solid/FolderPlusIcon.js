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
    d: "M3.75 2A2.75 2.75 0 0 0 1 4.75v14.5A2.75 2.75 0 0 0 3.75 22h16.5A2.75 2.75 0 0 0 23 19.25V6.75A2.75 2.75 0 0 0 20.25 4h-7.172a1.25 1.25 0 0 1-.883-.366l-.829-.829A2.75 2.75 0 0 0 9.422 2zm8.78 7.47a.75.75 0 0 0-1.28.53v2.25H9a.75.75 0 1 0 0 1.5h2.25V16a.75.75 0 1 0 1.5 0v-2.25H15a.75.75 0 1 0 0-1.5h-2.25V10a.75.75 0 0 0-.22-.53"
  }));
}
const ForwardRef = React.forwardRef(FolderPlusIcon);
module.exports = ForwardRef;