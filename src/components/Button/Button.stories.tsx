import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonProps } from './Button.types';
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  label: 'Test Button',
  className: '',
  size: 'sm'
};

export const Medium = Template.bind({});
Medium.args = {
    label: 'Test Button',
    size: 'md'
}

export const Large = Template.bind({});
Large.args = {
    label: 'Test Button',
    size: 'lg'
}

export const XLarge = Template.bind({});
XLarge.args = {
    label: 'Test Button',
    size: 'xl'
}

export const XXLarge = Template.bind({});
XXLarge.args = {
    label: 'Test Button',
    size: '2xl'
}