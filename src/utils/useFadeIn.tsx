import { useRef } from "react";
import useOnScreen from "./useOnScreen";

export default function useIsVisible<T extends HTMLElement>(
  onlyOnce: boolean = false
) {
  const ref = useRef<T>(null);
  const isVisible = useOnScreen(ref, onlyOnce);

  return { ref, isVisible };
}
