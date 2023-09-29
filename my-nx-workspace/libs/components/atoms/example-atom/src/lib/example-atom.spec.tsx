import { render } from '@testing-library/react';

import ExampleAtom from './example-atom';

describe('ExampleAtom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExampleAtom name="test" />);
    expect(baseElement).toBeTruthy();
  });
});
