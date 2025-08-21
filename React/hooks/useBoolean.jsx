import { useState } from "react";
export default function useBoolean(initialValue) {
  const [value, setValue] = useState(initialValue ?? false);
  return {
    value,
    setTrue: function () {
      setValue(true);
    },
    setFalse: function () {
      setValue(false);
    },
  };
}
