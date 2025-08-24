import { useState, useEffect } from "react";
export default function useQuery(fn, deps = []) {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let ignore = false;
    setState({ status: "loading" });
    fn()
      .then((data) => {
        if (ignore) return;
        setState({ status: "success", data });
      })
      .catch((err) => {
        if (ignore) return;

        setState({ status: "error", error: err });
      });
    return () => {
      ignore = true;
    };
  }, deps);

  return state;
}
