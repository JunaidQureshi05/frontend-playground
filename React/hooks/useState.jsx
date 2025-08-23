import { useState, useCallback } from "react";
export default function useSet(initialState = new Set()) {
  const [set, setSet] = useState(initialState);
  const add = useCallback((item) => {
    setSet((prev) => new Set([...prev, item]));
  }, []);
  const remove = useCallback((item) => {
    setSet(
      (prev) => new Set(Array.from(prev).filter((element) => element !== item))
    );
  }, []);
  const toggle = useCallback((item) => {
    setSet((prev) => {
      if (prev.has(item)) {
        return new Set(Array.from(prev).filter((element) => element !== item));
      } else {
        return new Set([...prev, item]);
      }
    });
  }, []);
  const reset = useCallback(() => {
    setSet(initialState);
  }, []);
  const clear = useCallback(() => {
    setSet(new Set());
  }, []);

  return {
    set,
    add,
    remove,
    toggle,
    reset,
    clear,
  };
}
