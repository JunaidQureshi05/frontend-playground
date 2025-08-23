import { useRef, useEffect } from "react";
export default function useTimeout(callback, delay) {
  const latestCallback = useRef(callback);
  latestCallback.current = callback;
  useEffect(() => {
    if (delay === null) return;
    window.timerId = setTimeout(() => {
      latestCallback.current();
    }, delay);
    return () => clearTimeout(window.timerId);
  }, [delay]);
}
