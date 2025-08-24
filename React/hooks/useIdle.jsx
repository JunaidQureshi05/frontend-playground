const DEFAULT_EVENTS = [
  "mousemove",
  "mousedown",
  "resize",
  "keydown",
  "touchstart",
  "wheel",
];

import { useEffect, useState } from "react";
export default function useIdle(
  ms = 60_000,
  initialState = false,
  events = DEFAULT_EVENTS
) {
  const [idle, setIdle] = useState(initialState);

  useEffect(() => {
    let timerId;
    function handleTimeout() {
      setIdle(true);
    }
    function trackMovement() {
      setIdle(false);
      clearTimeout(timerId);
      timerId = window.setTimeout(handleTimeout, ms);
    }
    function handleVisibilityChange() {
      if (document.hidden) {
        return;
      }
      trackMovement();
    }
    timerId = setTimeout(handleTimeout, ms);
    for (let event of events) {
      window.addEventListener(event, trackMovement);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      for (let event of events) {
        window.removeEventListener(event, trackMovement);
      }
      clearTimeout(timerId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  });
  return idle;
}
