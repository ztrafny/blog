import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ztrafny.github.io',
  base: '/blog',
  integrations: [
    starlight({
      title: 'Zac Trafny',
      description: 'Writing on software, knowledge, and building things.',
      social: {
        linkedin: 'https://linkedin.com/in/zactrafny',
        github: 'https://github.com/zactrafny',
      },
      sidebar: [
        {
          label: 'Blog',
          items: [
            {
              label: 'Lessons from Building Solo Software',
              autogenerate: { directory: 'lessons-from-building-solo-software' },
            },
          ],
        },
      ],
    }),
  ],
});
