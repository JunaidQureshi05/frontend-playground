import { useState } from "react";
export default function usePrevious(state) {
  const [current, setCurrent] = useState(state ?? 0);
  const [previous, setPrevious] = useState();
  if (current !== state) {
    setCurrent(state);
    setPrevious(current);
  }
  return previous;
}
