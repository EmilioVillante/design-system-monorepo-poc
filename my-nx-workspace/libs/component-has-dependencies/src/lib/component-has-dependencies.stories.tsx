import type { Meta, StoryObj } from '@storybook/react';
import { ComponentHasDependencies } from './component-has-dependencies';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ComponentHasDependencies> = {
  component: ComponentHasDependencies,
  title: 'ComponentHasDependencies',
};
export default meta;
type Story = StoryObj<typeof ComponentHasDependencies>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/Welcome to ComponentHasDependencies!/gi)
    ).toBeTruthy();
  },
};
