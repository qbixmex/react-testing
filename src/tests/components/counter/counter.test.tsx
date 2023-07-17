import { render, screen } from "@testing-library/react";
import { Counter } from "../../../components";
import user from '@testing-library/user-event';

describe('Test on <Counter />', () => {
  test('Should render elements correctly', () => {
    render(<Counter />);

    const heading = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: /increment/i });

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('Should start with default value', () => {
    render(<Counter />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('0');
  });

  test('Should increment by one after clicking button', async () => {
    //* Arrange
    user.setup();
    render(<Counter />);

    const heading = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: /increment/i });

    //* Act
    await user.click(button);

    //* Expect
    expect(heading).toHaveTextContent('1');
  });

  test('Should decrement by one after clicking button', async () => {
    //* Arrange
    user.setup();
    const INITIAL_VALUE = 8;

    render(<Counter initialValue={INITIAL_VALUE} />);

    const heading = screen.getByRole('heading', { level: 1 });
    const buttonDecrement = screen.getByRole('button', { name: /decrement/i });

    //? screen.debug();
    //* Act
    await user.click(buttonDecrement);
    //? screen.debug();

    //* Expect
    expect(heading).toHaveTextContent(`${INITIAL_VALUE - 1}`);
  });

  test('Should not decrement by one if counter is 0', async () => {
    //* Arrange
    user.setup();
    render(<Counter />);

    const heading = screen.getByRole('heading', { level: 1 });
    const buttonDecrement = screen.getByRole('button', { name: /decrement/i });

    // screen.debug();
    //* Act
    await user.click(buttonDecrement);
    // screen.debug();

    //* Expect
    expect(heading).toHaveTextContent('0');
  });
});