import { useState, useRef, useCallback } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const prevRef = useRef(null);

  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  const ref = useCallback((node) => {
    // Remove listeners from previous node
    if (prevRef.current) {
      prevRef.current.removeEventListener("mouseenter", onMouseEnter);
      prevRef.current.removeEventListener("mouseleave", onMouseLeave);
    }

    // Add listeners to the new node
    if (node && node.nodeType === Node.ELEMENT_NODE) {
      node.addEventListener("mouseenter", onMouseEnter);
      node.addEventListener("mouseleave", onMouseLeave);
    }

    // Update prevRef
    prevRef.current = node;
  }, []);

  return [ref, hovered];
}
