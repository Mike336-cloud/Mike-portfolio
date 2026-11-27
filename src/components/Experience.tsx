import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding overflow-x-hidden bg-white dark:bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">My Journey</p>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle mx-auto">
            A timeline of the roles and qualifications that shaped who I am as a developer.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Centre line (desktop) */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"
            aria-hidden="true"
          />

          <div className="space-y-8 lg:space-y-0">
            {TIMELINE.map((entry, index) => {
              const isLeft = index % 2 === 0;
              const isWork = entry.type === 'work';

              return (
                <motion.div
                  key={`${entry.title}-${index}`}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className={`relative lg:flex lg:items-start lg:gap-8 lg:pb-12 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="card p-6 mb-4 lg:mb-0">
                      <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            isWork
                              ? 'bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300'
                              : 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300'
                          }`}
                        >
                          {entry.type === 'work' ? 'Work' : 'Education'}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{entry.period}</span>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">{entry.title}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">{entry.organisation}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{entry.description}</p>
                      <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                        {entry.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Centre dot */}
                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full items-center justify-center shadow-lg z-10"
                    style={{
                      background: isWork
                        ? 'linear-gradient(135deg, #6366f1, #818cf8)'
                        : 'linear-gradient(135deg, #10b981, #34d399)',
                    }}
                    aria-hidden="true"
                  >
                    {isWork ? (
                      <Briefcase className="w-4 h-4 text-white" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-white" />
                    )}
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
