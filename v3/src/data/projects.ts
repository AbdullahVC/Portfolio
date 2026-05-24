export type ProjectStatus = 'shipped' | 'live' | 'in-progress' | 'archived' | 'concept';

export type ProjectMeta = { key: string; value: string };

export type ProjectIcon = 'workflow' | 'dashboard' | 'globe';

/* Featured project — text (title/category/description) is i18n'd via projects.featured.{slug}.* */
export type FeaturedProject = {
  slug: string;
  stack: string[];
  github?: string;
  live?: string;
  previewImage?: string;
  status: ProjectStatus;
  meta?: ProjectMeta[];
  icon?: ProjectIcon;
};

/* Archive project — text (title/summary) is i18n'd via projects.archive.{slug}.* */
export type ArchiveProject = {
  slug: string;
  stack: string[];
  github?: string;
  status?: ProjectStatus;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'isbn-resale-automation',
    stack: ['n8n', 'OpenAI', 'Webhook', 'Price Parsing'],
    previewImage: '/projects/isbn-resale-automation.png',
    status: 'shipped',
    icon: 'workflow',
    meta: [
      { key: 'status',   value: 'active' },
      { key: 'nodes',    value: '6' },
      { key: 'last run', value: '2m ago' },
      { key: 'sync',     value: 'online' },
    ],
  },
  {
    slug: 'workflow-control-panel',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'n8n API', 'tRPC'],
    status: 'in-progress',
    icon: 'dashboard',
    meta: [
      { key: 'status',   value: 'wip' },
      { key: 'milestone',value: 'v0.2' },
      { key: 'coverage', value: '40%' },
      { key: 'eta',      value: '2 weeks' },
    ],
  },
  {
    slug: 'portfolio-hub',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'next-intl', 'Vercel'],
    github: 'https://github.com/AbdullahVC',
    live: 'https://abdullahvcoskun.dev',
    status: 'live',
    icon: 'globe',
    meta: [
      { key: 'status',   value: 'live' },
      { key: 'langs',    value: 'tr · de · en' },
      { key: 'sections', value: '7' },
      { key: 'build',    value: 'vercel · auto' },
    ],
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    slug: 'webhook-monitor',
    stack: ['n8n API', 'Next.js', 'Supabase', 'Resend'],
    github: 'https://github.com/AbdullahVC',
  },
  {
    slug: 'lead-intake-system',
    stack: ['n8n', 'HubSpot', 'WhatsApp', 'PostgreSQL'],
    status: 'in-progress',
  },
  {
    slug: 'prompt-routing-tool',
    stack: ['TypeScript', 'OpenAI', 'Anthropic', 'pgvector'],
    status: 'in-progress',
  },
  {
    slug: 'agent-memory-layer',
    stack: ['pgvector', 'Supabase', 'OpenAI', 'Edge Functions', 'TypeScript'],
    status: 'concept',
  },
  {
    slug: 'internal-ocr-utility',
    stack: ['Python', 'Tesseract', 'OpenAI', 'FastAPI'],
    status: 'concept',
  },
  {
    slug: 'ai-parsing-sandbox',
    stack: ['Python', 'Pydantic', 'OpenAI', 'pytest'],
    github: 'https://github.com/AbdullahVC',
  },
];

/* Backwards alias for any lingering imports — remove later */
export const projects = featuredProjects;
export type Project = FeaturedProject;
