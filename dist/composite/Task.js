"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Task;

var _react = _interopRequireDefault(require("react"));

function Task(_ref) {
  var _ref$task = _ref.task,
      id = _ref$task.id,
      title = _ref$task.title,
      state = _ref$task.state,
      onArchiveTask = _ref.onArchiveTask,
      onPinTask = _ref.onPinTask;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "list-item"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: title,
    readOnly: true
  }));
}