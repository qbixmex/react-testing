import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../../hooks';
import {  } from 'react-dom/test-utils';

describe("Tests on useCounter Hook", () => {

  test("Should render initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("Should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      }
    });
    expect(result.current.count).toBe(10);
  });

  test("Should increment the counter", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 5,
      }
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(6);
  });

  test("Should decrement the counter", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 5,
      }
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(4);
  });

  test("Should not decrement the counter if value is 0", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 0,
      }
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });

  test("Should reset the counter to default value", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 5,
      }
    });
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(5);
  });
  
});