import { useState } from 'react';
import { CounterProps } from './counter';

const useCounter = ({ initialCount = 0 }: CounterProps = {}) => {
  const [count, setCount] = useState(initialCount);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = (): void => setCount(initialCount);

  return { count, increment, decrement, reset };
};

export default useCounter;
