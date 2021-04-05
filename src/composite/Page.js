import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { Header } from './Header';
import './page.css';

export const LandingPage = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <section>
      <h2>SME iOB Landing Page </h2>
      <p>


        <div class="container-with-aside"><div class="container-with-aside__columns"><div class="container-with-aside__main u-pv-x-large"><div><div class="text-block text-block--small u-mb-large">
          <h3 class="section-heading section-heading--small">How to get a business loan</h3><p>It’s quick and easy to apply online and you’ll receive a fast decision to take your business forward.</p></div>
          <ol class="process-diagram"><li class="process-diagram__container"><div class="process-diagram__content"><div class="text-block text-block--xsmall"><h5 class="paragraph-heading paragraph-heading--small">Check if you <a class="cta-link" href="/Thai/borrower/eligibility/">qualify</a> in 30 seconds</h5><p class="text-block__paragraph">See if you’re eligible without affecting your credit score.</p></div></div>
          </li><li class="process-diagram__container"><div class="process-diagram__content"><div class="text-block text-block--xsmall"><h5 class="paragraph-heading paragraph-heading--small">Apply online in 10 minutes</h5><p class="text-block__paragraph">Tell us about you and your business with our simple application.</p></div></div></li><li class="process-diagram__container"><div class="process-diagram__content"><div class="text-block text-block--xsmall"><h5 class="paragraph-heading paragraph-heading--small">Decision in as little as 5 hours</h5><p class="text-block__paragraph">If approved, you’ll receive a no-obligation, personalised quote.</p></div></div></li><li class="process-diagram__container"><div class="process-diagram__content">
            <div class="text-block text-block--xsmall"><h5 class="paragraph-heading paragraph-heading--small">Your loan is funded</h5><p class="text-block__paragraph">Once you accept, we run some final checks to process your loan and deposit the money straight into your account.</p></div></div></li></ol>  
            <Button size="small" onClick={onLogin} label="Apply Now" /> </div></div><div class="container-with-aside__aside u-pv-x-large"><div><div class="text-block text-block--small component-variant__border u-mb-medium"><h4 class="paragraph-heading paragraph-heading--medium">Here to help if you need us</h4>
          
          <p class="text-block__paragraph">Our Thai-based team are here to help throughout your loan. If you’re already a customer and have been impacted by Covid-19, please give us a call on our dedicated line.</p><p>Please note that due to an increase in call volumes, wait times are longer than usual. We appreciate your patience.</p><p>Loan enquiries <a href="mailto:credit@smeiOB.com" class="cta-link">credit@smeiOB.com</a></p><p>COVID-19 helpline <a href="tel:3223" class="cta-link">91 966 1186</a></p><p>Business customer support email <a class="cta-link" href="mailto:loanservicing@smeiOB.com" target="_blank" rel="noopener noreferrer">loanservicing@smeiOB.com</a></p><p>Open Mon-Fri, 9am-6pm</p></div></div></div></div></div>


        We recommend building UIs with a{' '}
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong>
        </a>{' '}
        process starting with atomic components and ending with LandingPages.
      </p>
     
      <div className="tip-wrapper">
        <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
);
LandingPage.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

LandingPage.defaultProps = {
  user: null,
};
