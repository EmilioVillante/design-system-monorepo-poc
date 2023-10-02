import { render } from '@testing-library/react';

import ExampleMolecule from './example-molecule';

describe('ExampleMolecule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExampleMolecule name="test" />);
    expect(baseElement).toBeTruthy();
  });
});
