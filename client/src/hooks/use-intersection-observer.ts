import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

interface UseIntersectionObserverReturn {
  ref: RefObject<HTMLDivElement>;
  inView: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0,
  rootMargin = '0px',
}: UseIntersectionObserverProps = {}): UseIntersectionObserverReturn => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, inView };
};
