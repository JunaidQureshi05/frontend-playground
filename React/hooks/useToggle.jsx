/**
 * @param {boolean | undefined} defaultValue
 */
import { useState, useCallback } from "react";
export default function useToggle(defaultValue) {
  const [value, setValue] = useState(Boolean(defaultValue));
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return [value, toggle, setValue];
}
