import { render } from '@testing-library/react';

import ExampleIndependentComponent from './example-independent-component';

describe('ExampleIndependentComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExampleIndependentComponent name="test" />);
    expect(baseElement).toBeTruthy();
  });
});
