import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "../../../components";

const skills = ['html', 'css', 'sass', 'javascript', 'typescript'];

describe('Tests on <Skills />', () => {

  test('Should contain a main heading', () => {
    const { container } = render(<Skills skills={skills} />);
    const heading = container.querySelector('#heading');
    const heading2 = container.querySelector(`[id="heading"]`);
    expect(heading).toHaveTextContent('Skills');
    expect(heading2).toHaveTextContent('Skills');
  });

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
    const { container } = render(<Skills skills={skills} />);
    //? logRoles(container);
    
    const button = screen.getByRole('button', { name: 'Login' });

    //? screen.debug();
    const text = await screen.findByText(/^You're/, { exact: false }, { timeout: 2000 });
    //? screen.debug();

    expect(button).not.toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

});
