import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CounterTwo } from "../../../components";
import user from '@testing-library/user-event';

describe('Test on <CounterTwo> component', () => {
  test('Should render correctly', () => {
    render(<CounterTwo count={0} />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /counter two/i
    });
    expect(heading).toBeInTheDocument();
  });

  test('Should run handlers correctly', async () => {
    user.setup();

    const incrementHandler = vi.fn();
    const decrementHandler = vi.fn();
    const resetHandler = vi.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
        handleReset={resetHandler}
      />
    );

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    await user.click(incrementButton);
    expect(incrementHandler).toHaveBeenCalled();

    await user.click(decrementButton);
    expect(decrementHandler).toHaveBeenCalledTimes(1);

    await user.click(resetButton);
    expect(resetHandler).toHaveBeenCalledTimes(1);

  });
});