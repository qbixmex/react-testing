import { render, screen } from "@testing-library/react";
import { Alert } from "../../../components";

describe('Test on <Alert />', () => {
  test('Should have text in the component', () => {
    render(<Alert message='Cannot save perform this operation' />);
    const alertElement = screen.getByText('not save', { exact: false });
    expect(alertElement).toBeInTheDocument();
  });
  test('Should exit text in the component', () => {
    render(<Alert message='Error Saving' />);
    const alertElement = screen.getByText('error saving', { exact: false });
    expect(alertElement).toBeInTheDocument();
  });
  test('Should match text in the component', () => {

    //* Substring Match
    render(<Alert message='Post Saved' />);
    const alertElement = screen.getByText(/Post Saved/);

    //* Substring Match, ignore case
    const alertElement2 = screen.getByText(/post saved/i);

    //* Full String Match Ignore Case
    const alertElement3 = screen.getByText(/^post saved$/i);

    //* Match as function
    const alertElement4 = screen.getByText((content) => content.startsWith('Post'));

    expect(alertElement).toBeInTheDocument();
    expect(alertElement2).toBeInTheDocument();
    expect(alertElement3).toBeInTheDocument();
    expect(alertElement4).toBeInTheDocument();

  });
});