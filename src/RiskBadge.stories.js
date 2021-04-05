import React from 'react';
import { RiskBadge } from './RiskBadge';
import { Icon } from './Icon';

export default {
  title: 'SMEiOB/RiskBadge',
  component: RiskBadge,
};

export const AllRiskBadges = (args) =>(
  <div>
    <RiskBadge status="positive">Positive</RiskBadge>
    <RiskBadge status="negative">Negative</RiskBadge>
    <RiskBadge status="neutral">Neutral</RiskBadge>
    <RiskBadge status="error">Error</RiskBadge>
    <RiskBadge status="warning">Warning</RiskBadge>
    <RiskBadge status="positive">
      <Icon {...args} />
      with icon
    </RiskBadge>
  </div>
);
AllRiskBadges.args={
  icon:'facehappy',
  inline:true
}

AllRiskBadges.storyName = "all RiskBadges";

export const Positive = () => <RiskBadge status="positive">Positive</RiskBadge>;
export const Negative = () => <RiskBadge status="negative">Negative</RiskBadge>;
export const Warning = () => <RiskBadge status="warning">Warning</RiskBadge>;
export const Neutral = () => <RiskBadge status="neutral">Neutral</RiskBadge>;
export const Error = () => <RiskBadge status="error">Error</RiskBadge>;

export const WithIcon = (args) => (
  <RiskBadge {...args}>
    <Icon {...args}/>
    with icon
  </RiskBadge>
);
WithIcon.args = {
  status: "warning",
  icon: "check",
  inline: true,
};

WithIcon.storyName = "with icon";
