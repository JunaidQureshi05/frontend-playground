import { useRef, useCallback } from "react";
export default function useFocus() {
  const ref = useRef(null);
  const focus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
  return [ref, focus];
}
