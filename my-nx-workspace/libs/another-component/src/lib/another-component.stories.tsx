import type { Meta, StoryObj } from '@storybook/react';
import { AnotherComponent } from './another-component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AnotherComponent> = {
  component: AnotherComponent,
  title: 'AnotherComponent',
};
export default meta;
type Story = StoryObj<typeof AnotherComponent>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to __fileName__!/gi)).toBeTruthy();
  },
};
