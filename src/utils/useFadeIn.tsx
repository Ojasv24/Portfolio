import { useRef } from "react";
import useOnScreen from "./useOnScreen";

export default function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const isVisible = useOnScreen(ref);

  return { ref, isVisible };
}
