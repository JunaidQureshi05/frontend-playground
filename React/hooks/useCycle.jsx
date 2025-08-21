import { useState, useCallback } from "react";
export default function useCycle(...args) {
  const [index, setIndex] = useState(0);
  const cycle = useCallback(() => {
    setIndex((prev) => (prev + 1) % args.length);
  }, []);
  return [args[index], cycle];
}
