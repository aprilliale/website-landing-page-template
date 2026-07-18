import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AnimatedLetter from './AnimatedLetter';

const BODY_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.';

const NBSP = ' ';

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = BODY_TEXT.split('');
  const totalChars = chars.length;

  return (
    <section className="bg-black px-4 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl rounded-2xl md:rounded-[2rem] bg-[#101010] px-6 py-16 text-center sm:py-20 md:py-28">
        <p className="mb-6 text-[10px] uppercase tracking-widest text-primary sm:mb-8 sm:text-xs">
          Visual arts
        </p>

        <WordsPullUpMultiStyle
          className="mx-auto max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          segments={[
            { text: 'I am Marcus Chen,', className: 'font-normal' },
            { text: 'a self-taught director.', className: 'font-serif italic' },
            {
              text: 'I have skills in color grading, visual effects, and narrative design.',
              className: 'font-normal',
            },
          ]}
        />

        <p
          ref={paragraphRef}
          className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed sm:mt-12 sm:text-sm md:mt-16 md:text-base"
          style={{ color: '#DEDBC8' }}
        >
          {chars.map((char, i) => {
            const charProgress = i / totalChars;
            const range: [number, number] = [charProgress - 0.1, charProgress + 0.05];
            return (
              <AnimatedLetter
                key={i}
                char={char === ' ' ? NBSP : char}
                progress={scrollYProgress}
                range={range}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
