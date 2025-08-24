import { useState, useCallback, useRef } from "react";
const defaultDirty = false;
const defaultTouched = false;
export default function useInputControl(initialValue) {
  const initialValueRef = useRef(initialValue);
  const [value, setValue] = useState(initialValue);
  const [dirty, setDirty] = useState(defaultDirty);
  const [touched, setTouched] = useState(defaultTouched);
  const handleChange = useCallback((event) => {
    setValue(event.target.value);
    setDirty(true);
  }, []);
  const handleBlur = useCallback(() => {
    setTouched(true);
  }, []);
  const reset = useCallback(() => {
    setValue(initialValueRef.current);
    setDirty(defaultDirty);
    setTouched(defaultTouched);
  }, []);
  const different = initialValueRef.current !== value;

  return {
    value,
    dirty,
    touched,
    different,
    handleChange,
    handleBlur,
    reset,
  };
}
