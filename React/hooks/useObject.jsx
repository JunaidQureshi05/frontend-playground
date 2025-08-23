import { useState, useCallback } from "react";

function isPOJO(obj) {
  if (!obj || typeof obj !== "object") return false;
  if (obj.__proto__ === Object.prototype || obj.__proto__ === null) return true;
  return false;
}
export default function useObject(initialValue) {
  const [state, setState] = useState(initialValue);
  const merge = useCallback((partial) => {
    if (partial instanceof Function) {
      let updateState = partial(state);
      if (!isPOJO(updateState)) {
        throw new Error("Invalid new state");
      }
      return setState({ ...state, ...updateState });
    }
    if (!isPOJO(partial)) {
      throw new Error("Invalid new state");
    }
    setState((previousState) => ({
      ...previousState,
      ...partial,
    }));
  }, []);
  return [state, merge];
}
