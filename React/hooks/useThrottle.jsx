import { useState, useRef, useEffect } from "react";

export default function useThrottle(value, interval = 500) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecutionTime = useRef(null);

  useEffect(() => {
    let now = Date.now();
    if (
      lastExecutionTime.current &&
      now > lastExecutionTime.current + interval
    ) {
      lastExecutionTime.current = now;
      setThrottledValue(value);
    } else {
      window.timerId = setTimeout(() => {
        lastExecutionTime.current = now;
        setThrottledValue(value);
      }, interval);
      () => clearTimeout(window.timerId);
    }
  }, [value, interval]);
  return throttledValue;
}
