import type { Meta, StoryObj } from '@storybook/react';
import { ExampleAtom } from './example-atom';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ExampleAtom> = {
  component: ExampleAtom,
  title: 'components/atoms/ExampleAtom',
};
export default meta;
type Story = StoryObj<typeof ExampleAtom>;

export const Default = {
  args: {},
};

export const WithName: Story = {
  args: {
    name: 'test',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ExampleAtom!/gi)).toBeTruthy();

    const re = new RegExp(`Name: ${args.name}`, 'gi');
    expect(canvas.getByText(re)).toBeTruthy();
  },
};
