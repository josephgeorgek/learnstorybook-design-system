"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

/**
 * Cusotom input
 * @param type can be text or password
 * @param errors
 * @param rest
 * @returns {*}
 * @constructor
 */
var Input = function Input(_ref) {
  var type = _ref.type,
      errors = _ref.errors,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["type", "errors"]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, rest.label), /*#__PURE__*/_react.default.createElement(_styles.InputField, {
    placeholder: rest.placeholder,
    type: type,
    name: rest.name,
    isWithButton: rest.isWithButton
  }), errors.map(function (error) {
    return /*#__PURE__*/_react.default.createElement("span", null, error, ", ");
  }));
};

var _default = Input;
exports.default = _default;
Input.defaultProps = {
  placeholder: '',
  isWithButton: false,
  errors: []
};