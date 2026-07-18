import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export default function WordsPullUpMultiStyle({ segments, className = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  let wordIndex = 0;

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {segments.map((segment, si) =>
        segment.text.split(' ').map((word, wi) => {
          const delayIndex = wordIndex++;
          return (
            <motion.span
              key={`${si}-${wi}`}
              className={`inline-block whitespace-nowrap mr-[0.28em] ${segment.className || ''}`}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: delayIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          );
        })
      )}
    </div>
  );
}
