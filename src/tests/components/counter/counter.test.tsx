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

    //* Act
    await user.click(buttonDecrement);

    //* Expect
    expect(heading).toHaveTextContent('0');
  });

  test('Should set counter value after click set amount', async () => {
    //* Arrange
    user.setup();
    render(<Counter />);
    const heading = screen.getByRole('heading', { level: 1 });
    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', {
      name: 'Set'
    });

    //* Act
    await user.type(amountInput, '15');
    await user.click(setButton);

    //* Expect
    expect(amountInput).toHaveValue(15);
    expect(heading).toHaveTextContent('15');
  });


  test('Should have focus elements on the right order', async () => {
    user.setup();
    render(<Counter />);
    const buttonIncrement = screen.getByRole('button', { name: /increment/i });
    const buttonDecrement = screen.getByRole('button', { name: /decrement/i });
    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', { name: 'Set' });

    await user.tab();
    expect(buttonIncrement).toHaveFocus();

    await user.tab();
    expect(buttonDecrement).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });

  test('Should select options', async () => {
    user.setup();
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>,
    );

    const option1: HTMLOptionElement = screen.getByRole('option', { name: 'A'});
    const option2: HTMLOptionElement = screen.getByRole('option', { name: 'B'});
    const option3: HTMLOptionElement = screen.getByRole('option', { name: 'C'});

    await user.selectOptions(screen.getByRole('listbox'), ['A', 'C']);

    expect(option1.selected).toBe(true);
    expect(option2.selected).toBe(false);
    expect(option3.selected).toBe(true);
  });

  test('Should select options', async () => {
    user.setup();
    render(
      <select multiple defaultValue={['B']}>
        <option value="1">A</option>
        <option value="2">B</option>
      </select>,
    );

    const option2: HTMLOptionElement = screen.getByRole('option', { name: 'B'});

    await user.deselectOptions(screen.getByRole('listbox'), 'B');

    expect(option2.selected).toBe(false);
  });

  test('Should upload file', async () => {
    user.setup();
    render(
      <>
        <label htmlFor="file-uploader">Upload File:</label>
        <input id="file-uploader" type="file" />
      </>,
    );

    const file = new File(['cat'], 'cat.jpg', { type: 'image/jpg' });
    const input: HTMLInputElement = screen.getByLabelText(/upload file/i);

    await user.upload(input, file);

    expect(input.files![0]).toBe(file);
    expect(input.files?.item(0)).toBe(file);
    expect(input.files).toHaveLength(1);

  });
});