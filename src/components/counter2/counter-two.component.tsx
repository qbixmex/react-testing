import { type CounterTwoProps } from "./counter";

const CounterTwo = ({
  handleIncrement,
  handleDecrement,
  handleReset,
  count
}: CounterTwoProps) => {
  return (
    <>
      <h1>Counter Two</h1>
      <p>{count}</p>

      {handleIncrement && (
        <button onClick={handleIncrement}>Increment</button>
      )}

      {handleDecrement && (
        <button onClick={handleDecrement}>Decrement</button>
      )}

      {handleReset && (
        <button onClick={handleReset}>Reset</button>
      )}

    </>
  );
};

export default CounterTwo;