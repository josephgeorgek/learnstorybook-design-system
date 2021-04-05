"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithIcon = exports.Error = exports.Neutral = exports.Warning = exports.Negative = exports.Positive = exports.AllRiskBadges = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _RiskBadge = require("./RiskBadge");

var _Icon = require("./Icon");

var _default = {
  title: 'SMEiOB/RiskBadge',
  component: _RiskBadge.RiskBadge
};
exports.default = _default;

var AllRiskBadges = function AllRiskBadges(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "positive"
  }, "Positive"), /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "negative"
  }, "Negative"), /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "neutral"
  }, "Neutral"), /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "error"
  }, "Error"), /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "warning"
  }, "Warning"), /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "positive"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, args), "with icon"));
};

exports.AllRiskBadges = AllRiskBadges;
AllRiskBadges.args = {
  icon: 'facehappy',
  inline: true
};
AllRiskBadges.storyName = "all RiskBadges";

var Positive = function Positive() {
  return /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "positive"
  }, "Positive");
};

exports.Positive = Positive;

var Negative = function Negative() {
  return /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "negative"
  }, "Negative");
};

exports.Negative = Negative;

var Warning = function Warning() {
  return /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "warning"
  }, "Warning");
};

exports.Warning = Warning;

var Neutral = function Neutral() {
  return /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "neutral"
  }, "Neutral");
};

exports.Neutral = Neutral;

var Error = function Error() {
  return /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, {
    status: "error"
  }, "Error");
};

exports.Error = Error;

var WithIcon = function WithIcon(args) {
  return /*#__PURE__*/_react.default.createElement(_RiskBadge.RiskBadge, args, /*#__PURE__*/_react.default.createElement(_Icon.Icon, args), "with icon");
};

exports.WithIcon = WithIcon;
WithIcon.args = {
  status: "warning",
  icon: "check",
  inline: true
};
WithIcon.storyName = "with icon";