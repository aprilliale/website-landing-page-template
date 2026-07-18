import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import WordsPullUp from './WordsPullUp';

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

const EASE_CUSTOM: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        <video
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <Navbar />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-8">
              <h1
                className="relative font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text="Prisma" showAsterisk />
              </h1>
            </div>

            <div className="col-span-4 flex flex-col gap-4 sm:gap-6 pb-2 sm:pb-4">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE_CUSTOM }}
              >
                Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not
                by place, status or labels but by passion and hunger to unlock potential through our
                unique perspectives.
              </motion.p>

              <motion.button
                className="group inline-flex items-center gap-2 w-fit rounded-full bg-primary py-1.5 pl-5 pr-1.5 transition-all hover:gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: EASE_CUSTOM }}
              >
                <span className="text-sm sm:text-base font-medium text-black">Join the lab</span>
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: '#E1E0CC' }} />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
