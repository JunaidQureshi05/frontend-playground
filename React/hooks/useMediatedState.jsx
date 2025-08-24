import { useState, useCallback, useRef } from "react";
export default function useMediatedState(mediator, initialState) {
  const mediatorFn = useRef(mediator);
  const [value, setValue] = useState(initialState);
  const setState = useCallback(
    (newStateOrUpdaterFunction) => {
      const newState =
        newStateOrUpdaterFunction instanceof Function
          ? newStateOrUpdaterFunction(value)
          : newStateOrUpdaterFunction;

      const mediator = mediatorFn.current;

      if (mediator.length === 2) {
        mediator(newState, setValue);
      } else {
        setValue(mediator(newState));
      }
    },
    [value]
  );

  return [value, setState];
}
