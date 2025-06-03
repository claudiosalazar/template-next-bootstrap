import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Template N&B',
  description:
    'Un template profesional desarrollado con Next.js 15.3.2 y Bootstrap 5.3.6',
  url: 'https://your-domain.com',
  ogImage: 'https://your-domain.com/images/opengraph.png',
  author: {
    name: 'Tu Nombre',
    url: 'https://your-website.com',
    twitter: '@tuusername',
  },
  keywords: [
    'Next.js',
    'React',
    'Bootstrap',
    'TypeScript',
    'Template',
    'Responsive',
    'SEO',
  ],
};

export const navItems = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Quienes Somos',
    href: '/quienes-somos',
  },
  {
    title: 'Productos',
    href: '/productos',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contacto',
    href: '/contacto',
  },
];
