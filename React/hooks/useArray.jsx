import { useState, useCallback } from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue ?? []);
  const push = useCallback((item) => {
    setArray(array.concat(item));
  }, []);
  const update = useCallback((index, newItem) => {
    let newArr = array.slice(0);
    newArr[index] = newItem;
    setArray(newArr);
  }, []);
  const remove = useCallback((index) => {
    setArray([...array.slice(0, index), ...array.slice(index + 1)]);
  }, []);
  const filter = useCallback((fn) => {
    let filtered = array.filter((element, idx) => fn(element, idx, array));
    setArray(filtered);
  }, []);
  const set = useCallback((arr) => {
    setArray(arr);
  }, []);
  const clear = useCallback(() => {
    setArray([]);
  }, []);
  return { array, push, update, remove, filter, set, clear };
}
