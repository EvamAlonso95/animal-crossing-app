# 🌿 Animal Crossing Museum Tracker

Aplicación web para explorar y gestionar la colección del museo de **Animal Crossing: New Horizons**. Consulta fósiles, peces, insectos y criaturas marinas, y lleva un registro de los items que ya tienes en tu museo personal.

---

## ✨ Características

- 🦴 **Fósiles** — Listado completo con precio, tamaño y puntuación HHA
- 🐟 **Peces** — Disponibilidad por hemisferio, ubicación, tamaño de sombra y precio
- 🐛 **Insectos** — Disponibilidad por hemisferio, ubicación y precio con Flick
- 🐙 **Criaturas marinas** — Disponibilidad, tamaño de sombra y precio
- 🏛️ **Mi Museo** — Colección personal persistente con posibilidad de añadir y quitar items
- 🔍 **Buscador** — Filtrado por nombre en tiempo real dentro de cada categoría
- 🌐 **100% en español** — Valores de la API traducidos al español
- 📱 **Responsive** — Adaptado a móvil, tablet y escritorio con menú hamburguesa en mobile

---

## 🛠️ Stack tecnológico

| Tecnología                                     | Uso                       |
| ---------------------------------------------- | ------------------------- |
| [React 19](https://react.dev)                  | UI                        |
| [TypeScript](https://www.typescriptlang.org)   | Tipado estático           |
| [Vite](https://vitejs.dev)                     | Bundler y dev server      |
| [React Router 7](https://reactrouter.com)      | Enrutamiento              |
| [TanStack Query 5](https://tanstack.com/query) | Fetching y caché de datos |
| [Tailwind CSS 4](https://tailwindcss.com)      | Estilos                   |
| [shadcn/ui](https://ui.shadcn.com)             | Componentes UI            |
| [Framer Motion](https://www.framer.com/motion) | Animaciones               |
| [Axios](https://axios-http.com)                | Cliente HTTP              |
| [ACNH API](https://acnhapi.com)                | Datos del juego           |

---

## 🚀 Instalación y uso

### Prerrequisitos

- Node.js 18+
- npm o pnpm

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=https://acnhapi.com/v1/
VITE_API_KEY=tu_api_key
```

### Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview

# Lint
npm run lint
```

---

## 📁 Estructura del proyecto

```
src/
├── collectionables/
│   ├── api/              # Instancia de Axios
│   ├── bugs/             # Acciones de insectos
│   ├── fishes/           # Acciones, hooks y página de peces
│   ├── fossils/          # Acciones, hooks y página de fósiles
│   ├── mollusks/         # Acciones de criaturas marinas
│   ├── components/       # Header, Footer, búsqueda, breadcrumbs
│   ├── context/          # Contexto del museo personal
│   ├── hooks/            # Hooks compartidos (categoría, traducción, totales…)
│   ├── layouts/          # Layout principal con outlet
│   ├── pages/            # Home, CollectionList, Item, MuseumPage
│   └── types/            # Interfaces TypeScript
├── components/
│   ├── CollectionCard    # Tarjeta de categoría en Home
│   ├── CollectionGrid    # Grid de categorías en Home
│   ├── ItemCard          # Grid de items por categoría
│   └── ui/               # Componentes shadcn/ui
├── router/               # Definición de rutas
└── main.tsx
```

---

## 🗺️ Rutas

| Ruta                   | Descripción                       |
| ---------------------- | --------------------------------- |
| `/`                    | Home con las categorías del museo |
| `/:itemCategory`       | Listado de items de una categoría |
| `/:itemCategory/:item` | Detalle de un item                |
| `/musseum`             | Mi museo personal                 |

---

## 📄 Licencia

Proyecto personal con fines educativos. Animal Crossing™ es propiedad de Nintendo.
