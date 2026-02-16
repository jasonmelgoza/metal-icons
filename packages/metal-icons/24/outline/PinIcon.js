const React = require("react");
function PinIcon({
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
    d: "M11.585 23.875 12 23.25l.415.625a.75.75 0 0 1-.83 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2.5 4a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.585 23.875 12 23.25c.415.625.416.624.416.624l.002-.001.006-.004.023-.015.083-.057c.071-.05.175-.122.305-.216a31.98 31.98 0 0 0 4.333-3.777C19.51 17.344 22 13.837 22 9.954a9.93 9.93 0 0 0-2.93-7.04A10.023 10.023 0 0 0 12 0a10.023 10.023 0 0 0-7.07 2.914A9.932 9.932 0 0 0 2 9.954c0 3.883 2.49 7.39 4.832 9.85a31.981 31.981 0 0 0 4.333 3.777c.13.094.234.166.306.216l.082.057.023.015zM5.988 3.978A8.523 8.523 0 0 1 12 1.5c2.255 0 4.418.892 6.012 2.478A8.433 8.433 0 0 1 20.5 9.955c0 3.276-2.135 6.417-4.418 8.815A30.468 30.468 0 0 1 12 22.334a30.467 30.467 0 0 1-4.082-3.564C5.635 16.372 3.5 13.23 3.5 9.955c0-2.242.895-4.392 2.488-5.977"
  }));
}
const ForwardRef = React.forwardRef(PinIcon);
module.exports = ForwardRef;