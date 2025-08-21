import { useState, useEffect } from "react";
export default function useDefault(defaultValue, initialValue) {
  const [user, setUser] = useState(initialValue);

  if ([null, undefined].includes(user)) {
    setUser(defaultValue);
  }

  return [user, setUser];
}
