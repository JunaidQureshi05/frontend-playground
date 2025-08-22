import { useState, useEffect } from "react";
export default function useKeyPress(
  key,
  callback,
  { event = "keydown", target = window } = {
    event: "keydown",
    target: window,
  }
) {
  function handler(e) {
    if (e.key !== key) return;
    callback(e);
  }
  useEffect(() => {
    if (!(target && target.addEventListener)) return;
    target.addEventListener(event, handler);
    return () => target.removeEventListener(event, handler);
  }, [key, callback, event, target]);
}
