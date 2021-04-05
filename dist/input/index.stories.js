"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithError = exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

// Button.stories.js
var _default = {
  title: 'Platform/Input',
  component: _.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_.default, args);
}; // Each story then reuses that template


var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  label: 'Primary label'
};
var WithError = Template.bind({});
exports.WithError = WithError;
WithError.args = {
  errors: ['Main Error']
};