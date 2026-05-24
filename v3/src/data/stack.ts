export type StackCategory = {
  id: 'frontend' | 'backend' | 'ai_ml' | 'tools';
  items: string[];
};

export const stackCategories: StackCategory[] = [
  {
    id: 'frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'backend',
    items: ['Node.js', 'PostgreSQL', 'Prisma', 'Supabase']
  },
  {
    id: 'ai_ml',
    items: ['Claude / Anthropic', 'OpenAI', 'n8n', 'Workflow Orchestration']
  },
  {
    id: 'tools',
    items: ['Git', 'Docker', 'Postman', 'Vercel']
  }
];

export const recentStack: string[] = [
  'Next.js',
  'TypeScript',
  'Claude / Anthropic',
  'n8n',
  'OpenAI',
  'PostgreSQL',
  'Supabase',
  'Vercel'
];
