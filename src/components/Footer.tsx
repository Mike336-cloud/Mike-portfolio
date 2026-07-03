import { Code as Code2, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { NAV_LINKS, PROFILE, SOCIAL_LINKS } from '../data/portfolio';

const ICON_MAP = { Github, Linkedin, Twitter, Mail };

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400" role="contentinfo">
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <a
              href="#hero"
              onClick={e => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center gap-2 font-bold text-xl text-white mb-3 hover:text-primary-400 transition-colors"
              aria-label="Alex Rivera — back to top"
            >
              <Code2 className="w-5 h-5 text-primary-400" aria-hidden="true" />
              {PROFILE.brand}<span className="text-primary-400">.</span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting modern web experiences. Available for freelance and full-time roles.
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Navigation</h3>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Connect</h3>
            <ul className="space-y-2.5" role="list">
              {SOCIAL_LINKS.map(link => {
                const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP];
                return Icon ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary-400 transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {year} {PROFILE.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" aria-hidden="true" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
