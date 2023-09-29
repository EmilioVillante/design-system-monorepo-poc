import type { Meta, StoryObj } from '@storybook/react';
import { ExampleMolecule } from './example-molecule';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ExampleMolecule> = {
  component: ExampleMolecule,
  title: 'components/molecules/ExampleMolecule',
};
export default meta;
type Story = StoryObj<typeof ExampleMolecule>;

export const Default = {
  args: {},
};

export const WithName: Story = {
  args: {
    name: 'test',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ExampleMolecule!/gi)).toBeTruthy();

    const re = new RegExp(`Name: ${args.name}`, 'gi');
    expect(canvas.getByText(re)).toBeTruthy();
  },
};
