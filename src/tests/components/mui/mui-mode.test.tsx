import { render, screen } from '@testing-library/react';
import { MuiMode } from '../../../components';
import { AppProviders } from '../../../providers';

describe('Test on <MuiMode /> component', () => {

  test('Should render text correctly', () => {

    render(<MuiMode />, {
      wrapper: AppProviders
    });

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('dark mode');

  });

});
