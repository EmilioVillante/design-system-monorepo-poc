import { render } from '@testing-library/react';

import ExampleReactLibrary from './example-react-library';

describe('ExampleReactLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExampleReactLibrary name="example" description={['test', 'another']} />);
    expect(baseElement).toBeTruthy();
  });
});
