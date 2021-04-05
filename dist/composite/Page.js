"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LandingPage = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

var _Header = require("./Header");

require("./page.css");

var LandingPage = function LandingPage(_ref) {
  var user = _ref.user,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      onCreateAccount = _ref.onCreateAccount;
  return /*#__PURE__*/_react.default.createElement("article", null, /*#__PURE__*/_react.default.createElement(_Header.Header, {
    user: user,
    onLogin: onLogin,
    onLogout: onLogout,
    onCreateAccount: onCreateAccount
  }), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("h2", null, "SME iOB Landing Page "), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "container-with-aside"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "container-with-aside__columns"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "container-with-aside__main u-pv-x-large"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "text-block text-block--small u-mb-large"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    class: "section-heading section-heading--small"
  }, "How to get a business loan"), /*#__PURE__*/_react.default.createElement("p", null, "It\u2019s quick and easy to apply online and you\u2019ll receive a fast decision to take your business forward.")), /*#__PURE__*/_react.default.createElement("ol", {
    class: "process-diagram"
  }, /*#__PURE__*/_react.default.createElement("li", {
    class: "process-diagram__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "process-diagram__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "text-block text-block--xsmall"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    class: "paragraph-heading paragraph-heading--small"
  }, "Check if you ", /*#__PURE__*/_react.default.createElement("a", {
    class: "cta-link",
    href: "/Thai/borrower/eligibility/"
  }, "qualify"), " in 30 seconds"), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-block__paragraph"
  }, "See if you\u2019re eligible without affecting your credit score.")))), /*#__PURE__*/_react.default.createElement("li", {
    class: "process-diagram__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "process-diagram__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "text-block text-block--xsmall"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    class: "paragraph-heading paragraph-heading--small"
  }, "Apply online in 10 minutes"), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-block__paragraph"
  }, "Tell us about you and your business with our simple application.")))), /*#__PURE__*/_react.default.createElement("li", {
    class: "process-diagram__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "process-diagram__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "text-block text-block--xsmall"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    class: "paragraph-heading paragraph-heading--small"
  }, "Decision in as little as 5 hours"), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-block__paragraph"
  }, "If approved, you\u2019ll receive a no-obligation, personalised quote.")))), /*#__PURE__*/_react.default.createElement("li", {
    class: "process-diagram__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "process-diagram__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "text-block text-block--xsmall"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    class: "paragraph-heading paragraph-heading--small"
  }, "Your loan is funded"), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-block__paragraph"
  }, "Once you accept, we run some final checks to process your loan and deposit the money straight into your account."))))), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    size: "small",
    onClick: onLogin,
    label: "Apply Now"
  }), " ")), /*#__PURE__*/_react.default.createElement("div", {
    class: "container-with-aside__aside u-pv-x-large"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "text-block text-block--small component-variant__border u-mb-medium"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    class: "paragraph-heading paragraph-heading--medium"
  }, "Here to help if you need us"), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-block__paragraph"
  }, "Our Thai-based team are here to help throughout your loan. If you\u2019re already a customer and have been impacted by Covid-19, please give us a call on our dedicated line."), /*#__PURE__*/_react.default.createElement("p", null, "Please note that due to an increase in call volumes, wait times are longer than usual. We appreciate your patience."), /*#__PURE__*/_react.default.createElement("p", null, "Loan enquiries ", /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:credit@smeiOB.com",
    class: "cta-link"
  }, "credit@smeiOB.com")), /*#__PURE__*/_react.default.createElement("p", null, "COVID-19 helpline ", /*#__PURE__*/_react.default.createElement("a", {
    href: "tel:3223",
    class: "cta-link"
  }, "91 966 1186")), /*#__PURE__*/_react.default.createElement("p", null, "Business customer support email ", /*#__PURE__*/_react.default.createElement("a", {
    class: "cta-link",
    href: "mailto:loanservicing@smeiOB.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "loanservicing@smeiOB.com")), /*#__PURE__*/_react.default.createElement("p", null, "Open Mon-Fri, 9am-6pm")))))), "We recommend building UIs with a", ' ', /*#__PURE__*/_react.default.createElement("a", {
    href: "https://componentdriven.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "component-driven")), ' ', "process starting with atomic components and ending with LandingPages."), /*#__PURE__*/_react.default.createElement("div", {
    className: "tip-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "tip"
  }, "Tip"), " Adjust the width of the canvas with the", ' ', /*#__PURE__*/_react.default.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
    id: "a",
    fill: "#999"
  }))), "Viewports addon in the toolbar")));
};

exports.LandingPage = LandingPage;
LandingPage.defaultProps = {
  user: null
};