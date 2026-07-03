import { MapPin, Calendar, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/portfolio';

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Avatar */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 sm:w-96 lg:w-[26rem] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary-500/20 animate-float bg-slate-200 dark:bg-slate-800">
                <img src="/profile.jpg" alt="Michael Kariuki" className="w-full h-full object-cover object-top" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 rounded-2xl px-4 py-2.5 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-amber-500" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Fuelled by coffee</span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            {PROFILE.bio.map((paragraph, i) => (
              <p key={i} className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: MapPin, label: PROFILE.location, color: 'text-rose-500' },
                { icon: Calendar, label: `${PROFILE.yearsExperience} Years Experience`, color: 'text-primary-500' },
                { icon: Coffee, label: 'Open to Remote', color: 'text-amber-500' },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm"
                >
                  <Icon className={`w-4 h-4 ${color}`} aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {PROFILE.stats.map(({ value, label }) => (
                <div key={label} className="text-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-extrabold gradient-text">{value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
