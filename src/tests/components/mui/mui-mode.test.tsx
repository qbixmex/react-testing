import { render, screen } from '../../../test-utils';
import { MuiMode } from '../../../components';

describe('Test on <MuiMode /> component', () => {

  test('Should render text correctly', () => {

    render(<MuiMode />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('dark mode');

  });

});
