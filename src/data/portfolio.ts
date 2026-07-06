// ============================================================
//  PORTFOLIO DATA — Edit your details here
// ============================================================

export const PROFILE = {
  name: 'Michael Kariuki',
  brand: 'MIKE',
  title: 'Full-Stack Developer',
  tagline:
    'I craft fast, accessible, and beautiful web experiences — from pixel-perfect UIs to scalable APIs. Passionate about clean code, great DX, and products that delight users.',
  status: 'Available for new opportunities',
  email: 'njugunamichaelkariuki@gmail.com',
  phone: '+254 715 870 792', 
  location: 'Mombasa, Kenya',
  yearsExperience: '2+',
  bio: [
    `I'm a full-stack developer with experience building scalable web applications that users love. I specialize in React, Next.js frontends, and robust backend architectures with Node.js and databases like PostgreSQL, with a strong focus on performance and clean architecture.`,
    "When I'm not shipping features, I contribute to open-source projects, write technical articles, and mentor junior developers. I believe the best software is built at the intersection of great engineering and great design.",
  ],
  socials: {
    github: 'https://github.com/Mike336-cloud',
    linkedin: 'https://linkedin.com',
  },
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS = [
  {
    category: 'Frontend',
    gradient: 'from-amber-400 to-yellow-600',
    icon: 'Monitor',
    items: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    category: 'Backend',
    gradient: 'from-amber-400 to-yellow-600',
    icon: 'Server',
    items: [
      { name: 'Node.js / API Routes', level: 90 },
      { name: 'PostgreSQL / Neon', level: 85 },
      { name: 'Prisma ORM', level: 88 },
      { name: 'UploadThing', level: 85 },
      { name: 'RESTful APIs / JSON', level: 90 },
    ],
  },
  {
    category: 'Tools & DevOps',
    gradient: 'from-amber-400 to-yellow-600',
    icon: 'Wrench',
    items: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Vercel Deployments', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'CI/CD Workflows', level: 80 },
      { name: 'ESLint / Prettier', level: 85 },
    ],
  },
];

export const PROJECTS = [
  {
    title: 'University Exam Portal',
    description:
      'A comprehensive university past papers portal. Features include a hierarchical database structure (Department, Course, Unit, Paper) with Prisma, secure document management via UploadThing, and a robust CRUD admin ecosystem.',
    tags: ['Next.js (App Router)', 'TypeScript', 'Prisma ORM', 'Neon (PostgreSQL)', 'UploadThing', 'Tailwind CSS'],
    gradient: 'from-yellow-400 to-amber-600',
    image: `${import.meta.env.BASE_URL}exam-preview.png`,
    github: 'https://github.com/Mike336-cloud',
    live: 'https://sharks-team-app.vercel.app/',
    featured: true,
  },
  {
    title: 'Mombasa Sharks Admin & Stats Engine',
    description:
      'A comprehensive sports administration portal and real-time statistics engine for the Mombasa Sharks flag football team. Features include a position-aware statistics validation system, complex data persistence handling high-intensity stat volumes, and a secure Role-Based Access Control (RBAC) backend with automated media management.',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    gradient: 'from-amber-500 to-orange-600',
    image: `${import.meta.env.BASE_URL}sharks-preview.png`,
    github: 'https://github.com/Mike336-cloud',
    live: 'https://past-exams-app.vercel.app/',
    featured: true,
  },
];

export const TIMELINE = [
  {
    type: 'work' as const,
    title: 'Full-Stack Developer (Freelance)',
    organisation: 'Independent',
    period: '2023 – Present',
    description:
      'Developed and deployed scalable web applications including the University Exam Portal and Mombasa Sharks Admin Engine. Implemented complex hierarchical databases, RBAC authentication, and real-time stats engines.',
    tags: ['Next.js', 'Node.js', 'Prisma', 'React'],
  },
  {
    type: 'education' as const,
    title: 'Continuous Learning & Development',
    organisation: 'Self-Taught / Various',
    period: '2022 – Present',
    description:
      'Focused heavily on modern web development practices, mastering Next.js 14+, TypeScript, advanced caching strategies, and secure backend architectures with PostgreSQL.',
    tags: ['TypeScript', 'System Architecture', 'Frontend Mastery'],
  },
  {
    type: 'work' as const,
    title: 'Frontend Developer',
    organisation: 'Freelance',
    period: '2022 – 2023',
    description:
      'Built responsive, accessible user interfaces for various clients. Focused on pixel-perfect implementations from Figma designs and optimizing client-side performance.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Figma'],
  },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Mike333-cloud', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/michael-kariuki', icon: 'Linkedin' },
  { label: 'Email', href: 'mailto:njugunamichaelkariuki@gmail.com', icon: 'Mail' },
];
