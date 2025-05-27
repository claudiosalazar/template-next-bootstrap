import type { Metadata } from "next";
import Script from "next/script";
import { Inter  } from "next/font/google";
import "@/styles/globals.scss";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  subsets: ["latin"],
});

// Agrupación de las clases de fuentes
// Bootstrap usa system-ui por defecto, con Montserrat y Geist como fallbacks personalizados
const fontClasses = `${inter.variable}`;

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Titulo del Proyecto"
  },
  description: 
  "Descripción de proyecto.",
  keywords: [
    "Template",
    "Next.js",
    "React",
    "Bootstrap"
  ],
  manifest: "/site.webmanifest",
  authors: [{ name: "Nombre Autor", url: "https://{URL}" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Titulo del Proyecto",
    description: 
      "Descripción de proyecto.",
    url: "https://{URL}",
    siteName: "Nombre Autor",
    images: [
      {
        url: "https://{URL}/images/opengraph.png",
        secureUrl: "https://{URL}/images/opengraph.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Titulo del Proyecto",
      },
    ],
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Titulo del Proyecto",
    description: "Descripción de proyecto.",
    images: ["https://{URL}/images/opengraph.png"],
    site: "@tunombredeusuario",
  },
  icons: {
    icon: [
      { url: "/images/icons/favicon-32x32.png", sizes: "32x32" },
      { url: "/images/icons/favicon-16x16.png", sizes: "16x16" },
    ],
  },
  alternates: {
    canonical: "https://{URL}",
  },
  metadataBase: new URL("https://{URL}"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Meta tags adicionales para mejorar compatibilidad con WhatsApp */}
        <meta property="og:image" content="https://{URL}/images/opengraph.png?v=20250527" />
        <meta property="og:image:secure_url" content="https://{URL}/images/opengraph.png?v=20250527" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Titulo del Proyecto" />
        <meta property="og:title" content="Titulo del Proyecto" />
        <meta property="og:description" content="Descripción de proyecto." />
        <meta property="og:url" content="https://{URL}" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nombre Autor" />
        <link rel="image_src" href="https://{URL}/images/opengraph.png?v=20250527" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
      </head>
      <body className={fontClasses}>
        <Navbar />
        <main className="container-fluid g-0">
          <div className="row">
            {children}
          </div>
        </main>
        <Footer />
        <Script id="bootstrap" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossOrigin="anonymous" strategy="afterInteractive" />
      </body>
    </html>
  );
}
