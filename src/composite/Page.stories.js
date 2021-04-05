import React from 'react';

import { LandingPage } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Domain/LoanLandingPage',
  component: LandingPage,
};

const Template = (args) => <LandingPage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
