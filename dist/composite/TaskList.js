"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TaskList;

var _react = _interopRequireDefault(require("react"));

var _Task = _interopRequireDefault(require("./Task"));

function TaskList(_ref) {
  var loading = _ref.loading,
      tasks = _ref.tasks,
      onPinTask = _ref.onPinTask,
      onArchiveTask = _ref.onArchiveTask;
  var events = {
    onPinTask: onPinTask,
    onArchiveTask: onArchiveTask
  };

  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "list-items"
    }, "loading");
  }

  if (tasks.length === 0) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "list-items"
    }, "empty");
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "list-items"
  }, tasks.map(function (task) {
    return /*#__PURE__*/_react.default.createElement(_Task.default, Object.assign({
      key: task.id,
      task: task
    }, events));
  }));
}