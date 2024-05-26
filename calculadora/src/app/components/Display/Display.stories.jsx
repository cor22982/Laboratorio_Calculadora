import React from 'react';
import Display from './Display';

export default {
  title: 'Components/Display',
  component: Display,
  decorators: [(Story) => (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
      <Story />
    </div>
  )],
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '0',
};
