import { RefObject, useState, useMemo, useEffect } from "react";

export default function useOnScreen(
  ref: RefObject<HTMLElement>,
  onlyOnce: boolean = false
) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        (onlyOnce ? entry.isIntersecting : true) &&
          setIntersecting(entry.isIntersecting);
      }),
    [onlyOnce]
  );

  useEffect(() => {
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
