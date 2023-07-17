import { useState } from "react";
import { CounterProps } from "./counter";

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCounter] = useState(initialValue);

  const handleIncrement = (): void => {
    setCounter(count + 1);
  };

  const handleDecrement = (): void => {
    (count > 0) && setCounter(count - 1);
  };

  return (
    <>
      <h1>Count ({count})</h1>

      <button
        onClick={() => handleIncrement()}
      >increment</button>

      <button
        onClick={() => handleDecrement()}
      >decrement</button>
    </>
  );
};

export default Counter;
