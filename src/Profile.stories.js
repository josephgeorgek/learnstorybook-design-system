import React from "react";

import { SMEiOBProfile } from "./Profile";

export default {
  title: "SMEiOB/SMEiOBProfile",
  component: SMEiOBProfile,
};

export const Standard = (args) => <SMEiOBProfile {...args} />;
Standard.args = {
  size: "large",
  username: "Sean Lew",
  src: "https://media-exp1.licdn.com/dms/image/C5103AQGrLyLuCHQaWQ/profile-displayphoto-shrink_400_400/0/1557506105126?e=1622678400&v=beta&t=qgw1Cr0ZP16QH_940PqxkJOmY9pUyVdbWkTbFcB1tMk",
};

export const Sizes = (args) => (
  <div>
    <SMEiOBProfile {...args} size="large" />
    <SMEiOBProfile {...args} size="medium" />
    <SMEiOBProfile {...args} size="small" />
    <SMEiOBProfile {...args} size="tiny" />
  </div>
);
Sizes.args = {
  username: "Sean Lew",
  src: "https://media-exp1.licdn.com/dms/image/C5103AQGrLyLuCHQaWQ/profile-displayphoto-shrink_400_400/0/1557506105126?e=1622678400&v=beta&t=qgw1Cr0ZP16QH_940PqxkJOmY9pUyVdbWkTbFcB1tMk",
};

export const Initials = (args) => (
  <div>
    <SMEiOBProfile username="Sean Lew" />
    <SMEiOBProfile username="Dedy Lim" />
    <SMEiOBProfile username="Joseph George" />
    <SMEiOBProfile username="Sammie Lee" />
  </div>
);

export const Loading = (args) => (
    <div>
      <SMEiOBProfile {...args} size="large" />
      <SMEiOBProfile {...args} size="medium" />
      <SMEiOBProfile {...args} size="small" />
      <SMEiOBProfile {...args} size="tiny" />
    </div>
  );
  Loading.args = {
    loading: true,
  };

export const Large = (args) => (
  <div>
    <SMEiOBProfile loading size="large" />
    <SMEiOBProfile size="large" username="Sean Lew" />
    <SMEiOBProfile
      size="large"
      username="Sean Lew"
      src="https://media-exp1.licdn.com/dms/image/C5103AQGrLyLuCHQaWQ/profile-displayphoto-shrink_400_400/0/1557506105126?e=1622678400&v=beta&t=qgw1Cr0ZP16QH_940PqxkJOmY9pUyVdbWkTbFcB1tMk"
    />
  </div>
);
