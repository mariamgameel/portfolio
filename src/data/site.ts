export interface SiteConfig {
  name: string;
  name_ar: string;
  role: string;
  role_ar: string;
  tagline: string;
  tagline_ar: string;
  email: string;
  phone: string;
  location: string;
  location_ar: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  openForRoles: boolean;
  bookingUrl?: string;
  analyticsDomain?: string;
}

export const siteConfig: SiteConfig = {
  name: 'Mariam Gameel Ibrahim',
  name_ar: 'مريم جميل إبراهيم',
  role: 'Full-Stack Software Engineer',
  role_ar: 'مهندسة برمجيات فل-ستاك',
  tagline: 'Engineering scalable, human-centered software architectures with React, Laravel 12, Node.js, and local AI integrations.',
  tagline_ar: 'هندسة برمجيات قابلة للتوسع ومحورية حول المستخدم باستخدام React وLaravel 12 وNode.js وتكامل الذكاء الاصطناعي المحلي.',
  email: 'mariamgameel51@gmail.com',
  phone: '(+20) 1066758908',
  location: 'Cairo, Egypt',
  location_ar: 'القاهرة، مصر',
  github: 'https://github.com/mariamgameel',
  linkedin: 'https://www.linkedin.com/in/mariam-gameel',
  cvUrl: '/Mariam_Gameel_CV.pdf',
  openForRoles: true,
  bookingUrl: process.env.PUBLIC_BOOKING_URL || '',
  analyticsDomain: process.env.PUBLIC_ANALYTICS_DOMAIN || ''
};

export interface TechItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'cloud_security';
}

export const technicalStack: TechItem[] = [
  // Languages
  { name: 'JavaScript (ES6+)', category: 'languages' },
  { name: 'PHP (8.x & Laravel 12)', category: 'languages' },
  { name: 'SQL', category: 'languages' },
  { name: 'HTML5 & CSS3', category: 'languages' },
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Responsive Web Design', category: 'frontend' },
  // Backend & Databases
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'Laravel & Eloquent ORM', category: 'backend' },
  { name: 'RESTful API Architecture', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  // Cloud, AI & Security
  { name: 'Ollama & Local LLMs (RAG)', category: 'cloud_security' },
  { name: 'AWS Cloud Services (2x Certified)', category: 'cloud_security' },
  { name: 'Docker & Containerization', category: 'cloud_security' },
  { name: 'Terraform & CI/CD Concepts', category: 'cloud_security' },
  { name: 'GitHub Actions & Git', category: 'cloud_security' },
  { name: 'JWT, Laravel Sanctum, RBAC', category: 'cloud_security' },
  { name: 'OWASP Top 10 Defenses & Helmet', category: 'cloud_security' }
];

export const languagesSpoken = [
  { name: 'Arabic', name_ar: 'العربية', level: 'Native', level_ar: 'اللغة الأم' },
  { name: 'English', name_ar: 'الإنجليزية', level: 'C1 Proficient', level_ar: 'متقدم C1' },
  { name: 'Turkish', name_ar: 'التركية', level: 'B2 Independent', level_ar: 'متوسط B2' },
  { name: 'French', name_ar: 'الفرنسية', level: 'A1 Basic', level_ar: 'مبتدئ A1' },
  { name: 'Spanish', name_ar: 'الإسبانية', level: 'A1 Basic', level_ar: 'مبتدئ A1' }
];
