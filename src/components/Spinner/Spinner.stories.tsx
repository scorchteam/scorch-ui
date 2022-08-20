import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Spinner from './Spinner';
import { SpinnerProps } from './Spinner.types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args: SpinnerProps) => <Spinner {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: 'sm'
}

export const Medium = Template.bind({});
Medium.args = {
    size: 'md'
}

export const Large = Template.bind({});
Large.args = {
    size: 'lg'
}

export const XLarge = Template.bind({});
XLarge.args = {
    size: 'xl'
}

export const Auto = Template.bind({});
Auto.args = {
    size: 'auto'
}