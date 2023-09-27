import type { Meta, StoryObj } from '@storybook/react';
import { ExampleReactLibrary } from './example-react-library';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ExampleReactLibrary> = {
  component: ExampleReactLibrary,
  title: 'ExampleReactLibrary',
};
export default meta;
type Story = StoryObj<typeof ExampleReactLibrary>;

export const Defaulted = {
  args: {},
};

export const WithName: Story = {
  args: {
    name: 'Storybook Example',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const re = new RegExp(`Welcome to ${args.name}`, 'gi');
    expect(canvas.getByText(re)).toBeTruthy();
  },
};
