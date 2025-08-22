import { useEffect, useRef } from "react";
export default function useInterval(callback, delay) {
  let latestCallback = useRef(callback);
  latestCallback.current = callback;
  useEffect(() => {
    if (delay === null) return;
    let intervalId = setInterval(() => {
      latestCallback.current();
    }, delay);
    return () => clearInterval(intervalId);
  }, [delay]);
}
