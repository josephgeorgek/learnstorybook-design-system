"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Archived = exports.Pinned = exports.Default = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _Task = _interopRequireDefault(require("./Task"));

var _default = {
  component: _Task.default,
  title: 'Common/Task'
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Task.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0)
  }
};
var Pinned = Template.bind({});
exports.Pinned = Pinned;
Pinned.args = {
  task: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, Default.args.task), {}, {
    state: 'TASK_PINNED'
  })
};
var Archived = Template.bind({});
exports.Archived = Archived;
Archived.args = {
  task: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, Default.args.task), {}, {
    state: 'TASK_ARCHIVED'
  })
};