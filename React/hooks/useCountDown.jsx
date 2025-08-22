import { useState, useEffect, useCallback } from "react";
export default function useCountdown({
  countStart,
  countStop = 0,
  intervalMs = 1000,
  isIncrement = false,
}) {
  const [count, setCount] = useState(countStart);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    let timerId = setInterval(() => {
      setCount((prev) => {
        let updated = isIncrement ? prev + 1 : prev - 1;
        if (updated === countStop) {
          clearInterval(timerId);
        }
        return updated;
      });
    }, intervalMs);
    return () => clearInterval(timerId);
  }, [count, countStop, intervalMs, isIncrement, running]);
  const start = useCallback(() => {
    setRunning(true);
  }, []);
  const stop = useCallback(() => {
    setRunning(false);
  }, []);
  const reset = useCallback(() => {
    setRunning(false);
    setCount(countStart);
  }, []);
  return { count, start, stop, reset };
}
