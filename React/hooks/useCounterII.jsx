import { useState, useCallback } from "react";
export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue ?? 0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);
  const reset = useCallback(() => {
    setCount(initialValue ?? 0);
  }, []);
  return {
    count,
    setCount,
    increment,
    decrement,
    reset,
  };
}
