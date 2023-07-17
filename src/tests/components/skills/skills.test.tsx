import { render, screen } from "@testing-library/react";
import { Skills } from "../../../components";

const skills = ['html', 'sass', 'sass', 'javascript', 'typescript'];

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
});
