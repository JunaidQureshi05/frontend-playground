import { useState, useCallback } from "react";
export default function useMap(initialState) {
  const [map, setMap] = useState(new Map(initialState));

  const set = useCallback((key, value) => {
    let newMap = map;
    newMap.set(key, value);
    setMap(newMap);
  }, []);
  const remove = useCallback((key) => {
    let newMap = map;

    newMap.delete(key);
    setMap(newMap);
  }, []);
  const setAll = useCallback((entries) => {
    setMap(new Map(entries));
  }, []);
  const reset = useCallback(() => {
    setMap(new Map());
  }, []);
  return { map, set, remove, setAll, reset };
}
