import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  ignoreRefs?: RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      const isIgnoredRef = ignoreRefs?.some((ignoreRef) =>
        ignoreRef?.current?.contains(event.target as Node)
      );

      if (!el || el.contains(event.target as Node) || isIgnoredRef) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, ignoreRefs]);
};
