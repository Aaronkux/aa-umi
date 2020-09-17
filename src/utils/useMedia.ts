import { useEffect, useState } from "react";

// Function that gets value based on matching media query
const getValue = <T>(mediaQueryLists: MediaQueryList[], values: T[], defaultValue: T) => {
  // Get index of first media query that matches
  const index = mediaQueryLists.findIndex((mql) => mql.matches);
  // Return related value or defaultValue if none
  return typeof values[index] !== "undefined" ? values[index] : defaultValue;
};

export default function useMedia<T>(queries: string[], values: T[], defaultValue: T) {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  // State and setter for matched value
  const [value, setValue] = useState(
    getValue(mediaQueryLists, values, defaultValue)
  );

  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook only runs on mount/dismount).
      const handler = () =>
        setValue(getValue(mediaQueryLists, values, defaultValue));
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach((mql) => mql.addListener(handler));
      // Remove listeners on cleanup
      return () =>
        mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    },
    [mediaQueryLists, values, defaultValue] // Empty array ensures effect is only run on mount and unmount
  );

  return value;
}
