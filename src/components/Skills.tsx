import { Monitor, Server, Wrench } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SKILLS } from '../data/portfolio';

const ICONS = { Monitor, Server, Wrench };

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-slate-500 dark:text-slate-400 tabular-nums">{level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-sky-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            A curated overview of the technologies I use daily to build production-grade applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((category, catIndex) => {
            const Icon = ICONS[category.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="card p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{category.category}</h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {category.items.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
