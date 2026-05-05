import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ztrafny.github.io',
  integrations: [
    starlight({
      title: 'Zac Trafny',
      description: 'Writing on software, knowledge, and building things.',
      social: [
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/zactrafny' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/zactrafny' },
      ],
      sidebar: [
        {
          label: 'Blog',
          items: [
            {
              label: 'Lessons from Building Solo Software',
              autogenerate: { directory: 'blog/lessons-from-building-solo-software' },
            },
          ],
        },
      ],
    }),
  ],
});
