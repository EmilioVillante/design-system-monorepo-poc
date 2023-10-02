import type { Meta, StoryObj } from '@storybook/react';
import { ExampleIndependentComponent } from './example-independent-component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ExampleIndependentComponent> = {
  component: ExampleIndependentComponent,
  title: 'components/atoms/ExampleIndependentComponent',
};
export default meta;
type Story = StoryObj<typeof ExampleIndependentComponent>;

export const Default = {
  args: {},
};

export const WithName: Story = {
  args: {
    name: 'test',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/Welcome to ExampleIndependentComponent!/gi)
    ).toBeTruthy();

    const re = new RegExp(`Name: ${args.name}`, 'gi');
    expect(canvas.getByText(re)).toBeTruthy();
  },
};
