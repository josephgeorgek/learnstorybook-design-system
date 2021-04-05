"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputField = exports.Label = exports.Container = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

var Container = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n display: flex;\n position: relative;\n flex-direction: column;\n justify-content: left;\n"])));

exports.Container = Container;

var Label = _styledComponents.default.label(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 18px;\n  line-height: 1.25;\n  text-align: left;\n  color: black;\n  position: relative;\n  margin-bottom: 6px;\n"])));

exports.Label = Label;

var InputField = _styledComponents.default.input(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  height: 36px;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: white;\n  border: 1px solid grey;\n  padding-left: 10px;\n  line-height: normal;\n  font-size: 18px;\n  color: black;\n  \n  padding-right: ", ";\n  \n  &::placeholder {\n    color: grey;\n    opacity: 0.4;\n  }\n"])), function (props) {
  return props.isWithButton ? '70px' : '10px';
});

exports.InputField = InputField;