import type { Meta, StoryObj } from '@storybook/react';
import { <%= className %> } from './<%= fileName %>';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof <%= className %>> = {
  component: <%= className %>,
  title: '<%= directory %>/<%= className %>',
};
export default meta;
type Story = StoryObj<typeof <%= className %>>;

export const Default = {
  args: {},
};

export const WithName: Story = {
  args: {
    name: 'test'
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to <%= className %>!/gi)).toBeTruthy();

    const re = new RegExp(`Name: ${args.name}`, 'gi');
    expect(canvas.getByText(re)).toBeTruthy();
  },
};
