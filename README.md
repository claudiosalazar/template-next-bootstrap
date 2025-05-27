# Template Next.js Bootstrap

Un template básico y responsivo desarrollado con Next.js 15.3.2 y Bootstrap 5.3.6.

## 🚀 Características

- **Next.js 15.3.2**
- **React 19.1.0**
- **Bootstrap 5.3.6**
- **TypeScript 5.8.3**
- **SCSS**
- **Tabler Icons**
- **Formulario Reactivo**
- **Navegación Activa**
- **Carousel Automático**
- **SEO Optimizado**
- **PWA Ready**
- **Responsive Design**

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx            # Layout principal con metadata SEO
│   ├── page.tsx              # Página de inicio
│   ├── blog/
│   │   └── page.tsx          # Blog
│   ├── contacto/
│   │   └── page.tsx          # Formulario de contacto
│   ├── productos/
│   │   └── page.tsx          # Catálogo de productos
│   └── quienes-somos/
│       └── page.tsx          # Página institucional
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Barra de navegación responsiva
│   │   ├── Footer.tsx        # Pie de página con enlaces sociales
│   │   └── Carousel.tsx      # Carousel de imágenes
│   └── ui/
│       └── ContactForm.tsx   # Formulario de contacto con validaciones
├── styles/
│   ├── globals.scss          # Estilos globales e importaciones
│   ├── abstracts/
│   │   ├── _index.scss       # Índice de abstracts
│   │   ├── _variables.scss   # Variables SCSS personalizadas
│   │   └── _mixins.scss      # Mixins reutilizables
│   ├── components/
│   │   └── _form.scss        # Estilos del formulario
│   ├── layout/
│   │   ├── _carousel.scss    # Estilos del carousel
│   │   └── _navbar.scss      # Estilos de navegación
│   └── pages/
│       └── _quienes-somos.scss # Estilos específicos de páginas
└── public/
    ├── images/               # Imágenes estáticas
    ├── robots.txt           # SEO para motores de búsqueda
    ├── sitemap.xml          # Mapa del sitio
    └── site.webmanifest     # Configuración PWA
```

## 📦 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo con Turbopack
- `npm run build` - Construye el proyecto para producción
- `npm start` - Ejecuta el servidor de producción
- `npm run lint` - Ejecuta el linter de Next.js
- `npm run clean` - Limpia archivos de build

## 🎨 Personalización

### Variables SCSS

El proyecto utiliza variables SCSS personalizadas. Ejemplos de variables en:
```scss
// src/styles/abstracts/_variables.scss
$blanco: #fff;
$negro: #000;
$gris: #919191;

// Media breakpoints personalizados
$sm: 576px;
$md: 767px;
$lg: 992px;
$xl: 1200px;
$xxl: 1400px;
```

## 🌐  Configuración SEO

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

---

**Desarrollado usando Next.js y Bootstrap**

![firma](https://claudiosalazar.cl/images/firma-github.webp)