import { ChangeEvent, useState } from 'react';
import { CounterProps } from './counter';

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCounter] = useState(initialValue);
  const [amount, setAmount] = useState(0);

  const handleIncrement = (): void => {
    setCounter(count + 1);
  };

  const handleDecrement = (): void => {
    (count > 0) && setCounter(count - 1);
  };

  const setCount = (): void => {
    setCounter(amount);
  };

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>): void => {
    setAmount(parseInt(event.target.value));
  };

  return (
    <>
      <h1>Count ({count})</h1>

      <section>
        <button
          onClick={() => handleIncrement()}
        >increment</button>
        <button
          onClick={() => handleDecrement()}
        >decrement</button>
      </section>

      <br />

      <section>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleChangeAmount}
        />
        <button onClick={setCount}>Set</button>
      </section>
    </>
  );
};

export default Counter;
