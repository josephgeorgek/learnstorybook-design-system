"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Large = exports.Loading = exports.Initials = exports.Sizes = exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Profile = require("./Profile");

var _default = {
  title: "SMEiOB/SMEiOBProfile",
  component: _Profile.SMEiOBProfile
};
exports.default = _default;

var Standard = function Standard(args) {
  return /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, args);
};

exports.Standard = Standard;
Standard.args = {
  size: "large",
  username: "Sean Lew",
  src: "https://media-exp1.licdn.com/dms/image/C5103AQGrLyLuCHQaWQ/profile-displayphoto-shrink_400_400/0/1557506105126?e=1622678400&v=beta&t=qgw1Cr0ZP16QH_940PqxkJOmY9pUyVdbWkTbFcB1tMk"
};

var Sizes = function Sizes(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, Object.assign({}, args, {
    size: "large"
  })), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, Object.assign({}, args, {
    size: "medium"
  })), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, Object.assign({}, args, {
    size: "small"
  })), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, Object.assign({}, args, {
    size: "tiny"
  })));
};

exports.Sizes = Sizes;
Sizes.args = {
  username: "Sean Lew",
  src: "https://media-exp1.licdn.com/dms/image/C5103AQGrLyLuCHQaWQ/profile-displayphoto-shrink_400_400/0/1557506105126?e=1622678400&v=beta&t=qgw1Cr0ZP16QH_940PqxkJOmY9pUyVdbWkTbFcB1tMk"
};

var Initials = function Initials(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, {
    username: "Sean Lew"
  }), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, {
    username: "Dedy Lim"
  }), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, {
    username: "Joseph George"
  }), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, {
    username: "Sammie Lee"
  }));
};

exports.Initials = Initials;

var Loading = function Loading(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, Object.assign({}, args, {
    size: "large"
  })), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, Object.assign({}, args, {
    size: "medium"
  })), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, Object.assign({}, args, {
    size: "small"
  })), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, Object.assign({}, args, {
    size: "tiny"
  })));
};

exports.Loading = Loading;
Loading.args = {
  loading: true
};

var Large = function Large(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, {
    loading: true,
    size: "large"
  }), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, {
    size: "large",
    username: "Sean Lew"
  }), /*#__PURE__*/_react.default.createElement(_Profile.SMEiOBProfile, {
    size: "large",
    username: "Sean Lew",
    src: "https://media-exp1.licdn.com/dms/image/C5103AQGrLyLuCHQaWQ/profile-displayphoto-shrink_400_400/0/1557506105126?e=1622678400&v=beta&t=qgw1Cr0ZP16QH_940PqxkJOmY9pUyVdbWkTbFcB1tMk"
  }));
};

exports.Large = Large;