import { RefObject, useState, useEffect, useRef as useReactRef } from "react";

export default function useOnScreen(
  ref: RefObject<HTMLElement | null>,
  onlyOnce: boolean = false
) {
  const [isIntersecting, setIntersecting] = useState(false);
  const triggered = useReactRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (onlyOnce && triggered.current) return;
      if (entry.isIntersecting) triggered.current = true;
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, onlyOnce]);

  return isIntersecting;
}
