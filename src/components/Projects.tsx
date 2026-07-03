import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolio';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of projects that showcase my range — from SaaS platforms to developer tools.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              variants={item}
              className={`card overflow-hidden group flex flex-col ${index === 0 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
            >
              {/* Image / Gradient placeholder */}
              <div
                className={`h-48 relative overflow-hidden bg-slate-200 dark:bg-slate-800`}
                aria-hidden="true"
              >
                {/* @ts-ignore - project.image is dynamically added */}
                {project.image ? (
                  // @ts-ignore
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                )}
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 left-4">
                  {project.featured && (
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                      Featured
                    </span>
                  )}
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-4 right-8 w-20 h-20 bg-white/10 rounded-full" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium rounded-lg border border-slate-200 dark:border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    Source
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}