import type { Meta, StoryObj } from '@storybook/react';
import { ExampleOrganism } from './example-organism';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ExampleOrganism> = {
  component: ExampleOrganism,
  title: 'components/organisms/ExampleOrganism',
};
export default meta;
type Story = StoryObj<typeof ExampleOrganism>;

export const Default = {
  args: {},
};

export const WithName: Story = {
  args: {
    name: 'test',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ExampleOrganism!/gi)).toBeTruthy();

    const re = new RegExp(`Name: ${args.name}`, 'gi');
    expect(canvas.getByText(re)).toBeTruthy();
  },
};
