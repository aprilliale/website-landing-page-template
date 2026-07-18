import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const CARD_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const STORYBOARD_ICON =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85';
const CRITIQUES_ICON =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85';
const IMMERSION_ICON =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85';

const EASE_CARD: [number, number, number, number] = [0.22, 1, 0.36, 1];

function AnimatedCard({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: EASE_CARD }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface InfoCardProps {
  index: number;
  number: string;
  icon: string;
  title: string;
  items: string[];
}

function InfoCard({ index, number, icon, title, items }: InfoCardProps) {
  return (
    <AnimatedCard
      index={index}
      className="relative flex min-h-[280px] flex-col rounded-2xl bg-[#212121] p-4 sm:p-5 lg:h-full"
    >
      <img
        src={icon}
        alt=""
        className="mb-4 h-10 w-10 rounded-lg object-cover sm:mb-6 sm:h-12 sm:w-12"
      />
      <p className="mb-1 text-xs text-gray-500">{number}</p>
      <h3 className="mb-4 text-lg font-medium text-primary sm:mb-6 sm:text-xl">{title}</h3>
      <ul className="mb-4 flex-1 space-y-2 sm:space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span className="text-xs text-gray-400 sm:text-sm">{item}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-primary sm:text-sm">
        Learn more
        <ArrowRight className="h-3.5 w-3.5" style={{ transform: 'rotate(-45deg)' }} />
      </a>
    </AnimatedCard>
  );
}

export default function Features() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative z-10">
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14 md:mb-16">
          <WordsPullUpMultiStyle
            className="text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[
              { text: 'Studio-grade workflows for visionary creators.', className: 'text-primary' },
            ]}
          />
          <WordsPullUpMultiStyle
            className="mt-1 text-xl font-normal sm:mt-2 sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[{ text: 'Built for pure vision. Powered by art.', className: 'text-gray-500' }]}
          />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
          <AnimatedCard
            index={0}
            className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[#212121] lg:h-full"
          >
            <video
              src={CARD_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <p className="text-base font-medium sm:text-lg" style={{ color: '#E1E0CC' }}>
                Your creative canvas.
              </p>
            </div>
          </AnimatedCard>

          <InfoCard
            index={1}
            number="01"
            icon={STORYBOARD_ICON}
            title="Project Storyboard."
            items={[
              'Visual sequence mapping',
              'Shot-by-shot breakdowns',
              'Collaborative annotations',
              'Version history tracking',
            ]}
          />

          <InfoCard
            index={2}
            number="02"
            icon={CRITIQUES_ICON}
            title="Smart Critiques."
            items={[
              'AI-powered scene analysis',
              'Contextual creative notes',
              'Seamless tool integrations',
            ]}
          />

          <InfoCard
            index={3}
            number="03"
            icon={IMMERSION_ICON}
            title="Immersion Capsule."
            items={['Notification silencing', 'Ambient soundscapes', 'Schedule syncing']}
          />
        </div>
      </div>
    </section>
  );
}
