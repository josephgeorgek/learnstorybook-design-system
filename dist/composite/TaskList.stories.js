"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = exports.Loading = exports.WithPinnedTasks = exports.Default = exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _TaskList = _interopRequireDefault(require("./TaskList"));

var TaskStories = _interopRequireWildcard(require("./Task.stories"));

var _default = {
  component: _TaskList.default,
  title: 'Domain/LoanTaskList',
  decorators: [function (story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: '3rem'
      }
    }, story());
  }]
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_TaskList.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [(0, _objectSpread2.default)((0, _objectSpread2.default)({}, TaskStories.Default.args.task), {}, {
    id: '1',
    title: 'Task 1'
  }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, TaskStories.Default.args.task), {}, {
    id: '2',
    title: 'Task 2'
  }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, TaskStories.Default.args.task), {}, {
    id: '3',
    title: 'Task 3'
  }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, TaskStories.Default.args.task), {}, {
    id: '4',
    title: 'Task 4'
  }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, TaskStories.Default.args.task), {}, {
    id: '5',
    title: 'Task 5'
  }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, TaskStories.Default.args.task), {}, {
    id: '6',
    title: 'Task 6'
  })]
};
var WithPinnedTasks = Template.bind({});
exports.WithPinnedTasks = WithPinnedTasks;
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [].concat((0, _toConsumableArray2.default)(Default.args.tasks.slice(0, 5)), [{
    id: '6',
    title: 'Task 6 (pinned)',
    state: 'TASK_PINNED'
  }])
};
var Loading = Template.bind({});
exports.Loading = Loading;
Loading.args = {
  tasks: [],
  loading: true
};
var Empty = Template.bind({});
exports.Empty = Empty;
Empty.args = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, Loading.args), {}, {
  loading: false
});