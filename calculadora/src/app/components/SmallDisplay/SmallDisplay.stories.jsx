import React from 'react';
import SmallDisplay from './SmallDisplay';

export default {
  title: 'Components/SmallDisplay',
  component: SmallDisplay,
  decorators: [(Story) => (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
      <Story />
    </div>
  )],
};

const Template = (args) => <SmallDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '0',
};
