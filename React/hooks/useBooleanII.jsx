import { useCallback, useState } from "react";
export default function useBoolean(initialValue) {
  const [value, setValue] = useState(initialValue ?? false);
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);
  return {
    value,
    setTrue,
    setFalse,
  };
}
