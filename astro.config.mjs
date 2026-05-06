import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ztrafny.github.io',
  base: '/blog',
  integrations: [
    starlight({
      title: 'Zac Trafny',
      description: 'Writing on software, knowledge, and building things.',
      customCss: ['./src/styles/theme.css'],
      components: {
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
      },
      social: [
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/zac-trafny-7681b568/' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/zactrafny' },
      ],
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
