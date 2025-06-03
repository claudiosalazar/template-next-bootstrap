import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';

// Components
import { Navbar, Footer } from '@/components/layout';

// Config
import { siteConfig } from '@/config/site';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  subsets: ['latin'],
});

// Agrupación de las clases de fuentes
const fontClasses = `${inter.variable}`;

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: siteConfig.name,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  manifest: '/site.webmanifest',
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.author.name,
    images: [
      {
        url: siteConfig.ogImage,
        secureUrl: siteConfig.ogImage,
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: 'website',
    locale: 'es_CL',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    site: siteConfig.author.twitter,
  },
  icons: {
    icon: [
      { url: '/images/icons/favicon-32x32.png', sizes: '32x32' },
      { url: '/images/icons/favicon-16x16.png', sizes: '16x16' },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es-CL' dir='ltr'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#ffffff' />

        {/* Meta tags adicionales para mejorar compatibilidad con WhatsApp */}
        <meta
          property='og:image'
          content={`${siteConfig.ogImage}?v=20250527`}
        />
        <meta
          property='og:image:secure_url'
          content={`${siteConfig.ogImage}?v=20250527`}
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content={siteConfig.name} />
        <meta property='og:title' content={siteConfig.name} />
        <meta property='og:description' content={siteConfig.description} />
        <meta property='og:url' content={siteConfig.url} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={siteConfig.author.name} />
        <link rel='image_src' href={`${siteConfig.ogImage}?v=20250527`} />
        <meta httpEquiv='cache-control' content='no-cache' />
        <meta httpEquiv='expires' content='0' />
        <meta httpEquiv='pragma' content='no-cache' />
      </head>
      <body className={fontClasses}>
        <Navbar />
        <main className='container-fluid g-0'>
          <div className='row'>{children}</div>
        </main>
        <Footer />
        <Script
          id='bootstrap'
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO'
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />
      </body>
    </html>
  );
}
