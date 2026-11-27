import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Phone, Send, CircleCheck as CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE, SOCIAL_LINKS } from '../data/portfolio';

const ICON_MAP = { Github, Linkedin, Twitter, Mail };

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '1e91b3fb-b414-4fc4-972e-75eab476df7b',
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      if (!response.ok) {
        console.error('Form submission error:', response.status, response.statusText);
        setSubmitError('Something went wrong sending your message. Please try again or email me directly.');
        return;
      }
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error('Form submission error:', result);
        setSubmitError('Something went wrong sending your message. Please try again later.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="section-padding overflow-x-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Let's build something great</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you're looking for a full-time engineer, a freelance collaborator, or just want to connect — I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Email</p>
                  <a href={`mailto:${PROFILE.email}`} className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {PROFILE.email}
                  </a>
                </div>
              </div>
              
              {PROFILE.phone && (
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-500" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Phone</p>
                    <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-rose-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Location</p>
                  <p className="font-medium">{PROFILE.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Find me on</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.filter(s => s.icon !== 'Mail').map(link => {
                  const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP];
                  return Icon ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-colors shadow-sm"
                      aria-label={link.label}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <div className="card p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center text-center py-8 gap-4"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-500" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder="Jane Smith"
                      {...register('name')}
                      className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all
                        ${errors.name ? 'border-rose-400 dark:border-rose-500' : 'border-slate-300 dark:border-slate-700'}`}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="jane@example.com"
                      {...register('email')}
                      className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all
                        ${errors.email ? 'border-rose-400 dark:border-rose-500' : 'border-slate-300 dark:border-slate-700'}`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Tell me about your project or idea..."
                      {...register('message')}
                      className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none
                        ${errors.message ? 'border-rose-400 dark:border-rose-500' : 'border-slate-300 dark:border-slate-700'}`}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p
                      role="alert"
                      className="text-sm text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl px-4 py-3"
                    >
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}