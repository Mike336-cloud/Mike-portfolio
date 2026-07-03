import { ArrowDown, Github, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[60vh] lg:min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950 pt-16 lg:pt-0"
      aria-label="Hero"
    >
      {/* Animated background blobs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute -top-20 right-20 w-80 h-80 bg-sky-400/20 dark:bg-sky-600/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiAwaC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60 dark:opacity-20" />
      </div>

      <div className="section-container relative z-10 pt-10 sm:pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Status badge removed as per request */}

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Hi, I'm{' '}
            <span className="gradient-text">{PROFILE.name}</span>
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300">
            {PROFILE.title}
          </motion.p>

          <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {PROFILE.tagline}
          </motion.p>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleScroll('#projects')}
              className="btn-primary text-base"
              aria-label="View my projects"
            >
              View Projects
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="btn-secondary text-base"
              aria-label="Contact me"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social quick links */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="mt-10 flex items-center gap-3">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="text-slate-300 dark:text-slate-600 text-sm pl-1">Find me online</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
