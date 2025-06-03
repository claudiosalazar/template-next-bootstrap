import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Headers de seguridad básicos
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },

  // Configuración de Sass
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@use "src/styles/abstracts/variables" as *;`,
  },
};

export default nextConfig;
