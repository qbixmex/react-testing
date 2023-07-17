import { render, screen } from "@testing-library/react";
import { Skills } from "../../../components";

const skills = ['html', 'css', 'sass', 'javascript', 'typescript'];

describe('Tests on <Skills />', () => {
  test('Should render correctly', () => {
    render(<Skills skills={skills} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('Should list all skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('Should render a button', () => {
    render(<Skills skills={skills} />);
    const button = screen.getByRole('button', { name: 'Login' });
    expect(button).toBeInTheDocument();
  });

  test('Should not render login successful text by default', () => {
    render(<Skills skills={skills} />);
    const text = screen.queryByText(/^You're/, { exact: false });
    expect(text).not.toBeInTheDocument();
  });

  test('Should render login successful text after 500 milliseconds', async () => {
    render(<Skills skills={skills} />);
    const button = screen.getByRole('button', { name: 'Login' });
    const text = await screen.findByText(/^You're/, { exact: false }, { timeout: 2000 });
    expect(button).not.toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
