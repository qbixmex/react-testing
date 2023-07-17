import { render, screen } from '@testing-library/react';
import App from '../App';

describe("Tests on <App />", () => {
  test("Should have a heading text", () => {
    //* Arrange
    render(<App />);
    const h1 = screen.getByRole("heading", { level: 1 });

    //* Act

    //* Expect
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent("ReactJs");
  });

  test("Should have a lorem ipsum text", () => {
    //* Arrange
    render(<App />);
    const text = screen.getByText(/Lorem Ipsum/i);

    //* Act

    //* Expect
    expect(text).toHaveTextContent("Lorem Ipsum");
  });
});