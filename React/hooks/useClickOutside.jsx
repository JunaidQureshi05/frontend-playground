/**
 * @template T
 * @param {import("react").RefObject<T>} ref
 * @param {(event) => void} handler
 * @param {'mousedown' | 'touchstart' | undefined} eventType
 * @param {boolean | AddEventListenerOptions | undefined} eventListenerOptions
 */
import { useRef, useEffect } from "react";
export default function useClickOutside(
  ref,
  handler,
  eventType = "mousedown",
  eventListenerOptions = {}
) {
  let latestHandler = useRef(handler);
  latestHandler.current = handler;

  useEffect(() => {
    function eventHandler(e) {
      let target = e.target;
      if (!target || !target.isConnected) {
        return;
      }
      const outside = ref.current && !ref.current.contains(target);
      if (!outside) {
        return;
      }
      latestHandler.current(e);
    }
    window.addEventListener(eventType, eventHandler, eventListenerOptions);
    return () =>
      window.removeEventListener(eventType, eventHandler, eventListenerOptions);
  }, [ref, eventType, eventListenerOptions]);
}
