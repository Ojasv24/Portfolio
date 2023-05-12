import { RefObject, useState, useMemo, useEffect } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
      entry.isIntersecting && setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
