import { useState } from "react";
export default function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue ?? 0);
  return {
    count: counter,
    increment: function () {
      setCounter(counter + 1);
    },
    decrement: function () {
      setCounter(counter - 1);
    },
    reset: () => setCounter(initialValue ?? 0),
    setCount: setCounter,
  };
}
