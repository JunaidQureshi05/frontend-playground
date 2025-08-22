import { useState, useEffect, useMemo } from "react";
export default function createBreakpoint(breakpoints) {
  return function () {
    const [width, setWidth] = useState(window.innerWidth);
    const sortedBreakpoints = useMemo(() => {
      return Object.entries(breakpoints).sort((a, b) => a[1] - b[1]);
    }, [breakpoints]);
    function handleResize() {
      const width = window.innerWidth;
      setWidth(width);
    }
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return useMemo(
      () =>
        sortedBreakpoints.reduce(
          (acc, [name, size]) => (width >= size ? name : acc),
          sortedBreakpoints[0][0]
        ),
      [sortedBreakpoints, width]
    );
  };
}
