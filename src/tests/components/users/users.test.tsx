import { render, screen } from "@testing-library/react";
import { rest } from 'msw';
import { Users } from "../../../components";

import { server } from '../../../mocks/server';

describe('Test on <Users />', () => {
  test('Should render correctly', () => {
    render(<Users />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('Should render a users list', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');

    expect(users).toHaveLength(3);
  });

  test('Should render a server error', async () => {

    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users',
      (_request, response, context) => {
        return response(context.status(500));
      })
    );

    render(<Users />);

    const error = await screen.findByText('Error fetching users');

    expect(error).toBeInTheDocument();

  });
});