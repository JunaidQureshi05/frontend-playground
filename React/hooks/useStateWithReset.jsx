import { useState, useCallback } from "react";
export default function useStateWithReset(initialStateOrInitializer) {
  const [value, setValue] = useState(initialStateOrInitializer);
  const resetValue = useCallback(() => {
    setValue(initialStateOrInitializer);
  }, []);
  return [value, setValue, resetValue];
}
