/**
 * @typedef {Object} WindowSize
 * @property {number} height
 * @property {number} width
 */
/**
 * @returns {WindowSize}
 */

import { useState, useLayoutEffect } from "react";
export default function useWindowSize() {
  const [dimension, setDimension] = useState({
    height: 0,
    width: 0,
  });

  function handleResize() {
    setDimension({ height: window.innerHeight, width: window.innerWidth });
  }
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return dimension;
}
