import { render, screen } from '@testing-library/react';
import Demo from '../../components/demo';

describe("Tests on <Demo />", () => {
  test("Should have a heading text", () => {
    //* Arrange
    render(<Demo />);
    const h1 = screen.getByRole("heading", { level: 1 });

    //* Act

    //* Expect
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent("ReactJs");
  });

  test("Should have a lorem ipsum text", () => {
    //* Arrange
    render(<Demo />);
    const text = screen.getByText(/Lorem Ipsum/i);

    //* Act

    //* Expect
    expect(text).toHaveTextContent("Lorem Ipsum");
  });
});