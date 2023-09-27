import { render } from '@testing-library/react';

import ComponentHasDependencies from './component-has-dependencies';

describe('ComponentHasDependencies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentHasDependencies />);
    expect(baseElement).toBeTruthy();
  });
});
