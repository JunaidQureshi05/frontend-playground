import { useEffect, useRef } from "react";
export default function useEventListener(eventName, handler, element, options) {
  const latestHandler = useRef(handler);
  latestHandler.current = handler;
  useEffect(() => {
    let targetElement = element?.current ?? window;
    if (!(targetElement && targetElement.addEventListener)) return;
    const listener = (e) => {
      latestHandler.current(e);
    };
    targetElement.addEventListener(eventName, listener, options);
    return () =>
      targetElement.removeEventListener(eventName, listener, options);
  }, [eventName, element, options]);
}
