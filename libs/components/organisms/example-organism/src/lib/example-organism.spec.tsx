import { render } from '@testing-library/react';

import ExampleOrganism from './example-organism';

describe('ExampleOrganism', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExampleOrganism name="test" />);
    expect(baseElement).toBeTruthy();
  });
});
