# Template Next.js Bootstrap

Un template **minimalista y optimizado** desarrollado con Next.js 15.3.2 y Bootstrap 5.3.6, diseñado como base limpia para proyectos React.

> ✨ **Versión optimizada:** Este template ha sido completamente limpiado y optimizado, eliminando todo el código no utilizado para mantener solo lo esencial.

## 🚀 Características

- **Next.js 15.3.2** con App Router
- **React 19.1.0** con TypeScript
- **Bootstrap 5.3.6** para UI responsiva
- **TypeScript 5.8.3** para tipado estático
- **SCSS** minimalista con solo 3 variables necesarias
- **Configuración simplificada** sin middleware complejo
- **Código limpio** sin dependencias innecesarias
- **Bundle optimizado** sin código no utilizado
- **ESLint & Prettier** para calidad de código
- **Tabler Icons** para iconografía
- **Formularios reactivos** con validación básica
- **Navegación activa** dinámica
- **Carousel automático** optimizado
- **SEO Optimizado** con metadatos completos
- **PWA Ready** para aplicaciones web progresivas
- **Responsive Design** mobile-first

## 📁 Estructura del Proyecto

```
src/
├── app/                      # App Router de Next.js
│   ├── favicon.ico          # Icono del sitio
│   ├── layout.tsx           # Layout principal con SEO
│   ├── page.tsx             # Página de inicio
│   ├── blog/page.tsx        # Blog
│   ├── contacto/page.tsx    # Formulario de contacto
│   ├── productos/page.tsx   # Catálogo de productos
│   └── quienes-somos/page.tsx # Página institucional
├── components/              # Componentes minimalistas
│   ├── layout/              # Componentes de layout
│   │   ├── Navbar.tsx       # Barra de navegación responsiva
│   │   ├── Footer.tsx       # Pie de página con enlaces sociales
│   │   └── Carousel.tsx     # Carousel de imágenes
│   │   └── index.ts         # Re-export de Navbar y Footer
│   └── ui/                  # Componentes UI esenciales
│       ├── ContactForm.tsx  # Formulario con validaciones
│       └── index.ts         # Re-export de ContactForm
├── config/                  # Configuraciones centralizadas
│   └── site.ts              # Configuración del sitio
├── lib/                     # Utilidades básicas
│   └── validations.ts       # Validaciones de email y teléfono
├── types/                   # Tipos TypeScript esenciales
│   └── index.ts             # Tipos globales del proyecto
├── styles/                  # Estilos SCSS optimizados
│   ├── globals.scss         # Estilos globales e importaciones
│   ├── abstracts/           # Variables SCSS minimalistas
│   │   ├── _index.scss      # Índice de abstracts
│   │   └── _variables.scss  # Solo 3 variables esenciales
│   ├── components/          # Estilos de componentes
│   │   └── _form.scss       # Estilos del formulario
│   ├── layout/              # Estilos de layout
│   │   ├── _carousel.scss   # Estilos del carousel
│   │   └── _navbar.scss     # Estilos de navegación
│   └── pages/               # Estilos específicos de páginas
│       └── _quienes-somos.scss
└── public/                  # Archivos estáticos
    ├── robots.txt           # SEO para motores de búsqueda
    ├── sitemap.xml          # Mapa del sitio
    ├── site.webmanifest     # Configuración PWA
    ├── images/              # Imágenes optimizadas
    │   ├── opengraph.png    # Imagen Open Graph
    │   ├── icons/           # Iconos PWA
    │   └── examples/        # Imágenes de ejemplo
    └── src/
        └── opengraph.psd    # Archivo fuente Open Graph
```

## 📦 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm start` - Ejecuta el servidor de producción
- `npm run lint` - Ejecuta el linter de ESLint
- `npm run lint:fix` - Ejecuta ESLint y corrige automáticamente
- `npm run type-check` - Verifica tipos de TypeScript
- `npm run format` - Formatea el código con Prettier
- `npm run clean` - Limpia archivos de build

## 🎨 Personalización

### Variables SCSS Minimalistas

El proyecto utiliza solo las variables SCSS esenciales:

```scss
// src/styles/abstracts/_variables.scss
$negro: #000;        // Color negro para texto navbar
$gris: #919191;      // Color gris para elementos navbar
$sm: 576px;          // Breakpoint para carousel responsivo
```

### Configuración Centralizada

El archivo `src/config/site.ts` centraliza toda la configuración:

```typescript
export const siteConfig = {
  name: 'Template Next.js Bootstrap',
  description: 'Un template profesional...',
  url: 'https://your-domain.com',
  author: {
    name: 'Tu Nombre',
    url: 'https://your-website.com',
    twitter: '@tuusername',
  },
  keywords: ['Next.js', 'React', 'Bootstrap', 'TypeScript'],
};
```

## 🌐 Configuración SEO

El SEO está configurado en `src/app/layout.tsx`:

- Meta tags completos
- Open Graph para redes sociales
- Twitter Cards
- Web App Manifest
- Robots.txt y Sitemap.xml

## 📱 Responsive Design

El template está optimizado para:

- **Mobile First**: < 576px
- **Small**: 576px - 767px
- **Medium**: 768px - 991px
- **Large**: 992px - 1199px
- **Extra Large**: 1200px - 1399px
- **Extra Extra Large**: ≥ 1400px

## 🔧 VSCode Integration

### Configuración Automatizada

- Inicio automático del servidor de desarrollo al abrir el proyecto
- Colores personalizados para carpetas usando Material Icon Theme
- Configuración en `.vscode/settings.json` y `.vscode/tasks.json`

## 🏙️ Images

- Las imágenes usadas fueron obtenidas desde [Pixabay](https://pixabay.com)
- El formato de imagen para el archivo opengraph esta en la carpeta **'/public/src/opengraph.psd'**.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

**Creado por** 

![firma](https://claudiosalazar.cl/images/firma-github.webp) 