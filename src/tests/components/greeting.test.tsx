import { render } from '@testing-library/react';
import { Greeting } from '../../components/';

describe('Tests on <Greeting />', () => {
  test('Should render with a name prop', () => {
    const name = 'Daniel';
    const { container } = render(<Greeting name={ name } />);
    const p = container.querySelector('p');

    expect(p?.innerHTML).toBe(`Hello ${name}`);
  });
});