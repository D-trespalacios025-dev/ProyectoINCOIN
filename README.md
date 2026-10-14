<div align="center">

<img src="public/logo.png" alt="Logo de INCOIN" width="180" />

# INCOIN — Ingeniería y Construcción Integral

Sitio web informativo (*landing page*) de una sola página para **INCOIN**, empresa colombiana de
consultoría, construcción, interventoría y gerencia de proyectos de ingeniería e infraestructura.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)

</div>

---

## Tabla de contenido

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Secciones de la página](#secciones-de-la-página)
- [Cómo modificar el contenido](#cómo-modificar-el-contenido)
- [Conceptos de React aplicados](#conceptos-de-react-aplicados)
- [Despliegue](#despliegue)
- [Contacto de la empresa](#contacto-de-la-empresa)

---

## Descripción

Página web corporativa desarrollada con **React** y **Vite** que presenta los servicios,
proyectos, sectores de trabajo y forma de contacto de INCOIN. Está pensada para funcionar
**sin backend ni base de datos**: todo el contenido vive en archivos de datos JavaScript y el
formulario de contacto envía la solicitud directamente por **WhatsApp**.

La idea central del proyecto es **separar el contenido del diseño**: para cambiar textos,
proyectos o fotografías casi nunca es necesario tocar los componentes, basta con editar
`src/datos/contenido.js` y `src/datos/imagenes.js`.

## Características

- 📱 **Diseño responsive**: se adapta a computadores, tablets y celulares (menú hamburguesa en móvil).
- 🧭 **Navegación fija** con desplazamiento suave y resaltado automático de la sección activa.
- 🏗️ **Catálogo de proyectos con filtros**: *Todos*, *Ejecutados* y *En ejecución*.
- 🖼️ **Galería de fotografías** con títulos al pasar el cursor.
- 💬 **Formulario de contacto controlado** que abre WhatsApp con el mensaje ya redactado.
- 🟢 **Botón flotante de WhatsApp** que aparece al hacer scroll.
- 🎨 **Paleta de colores centralizada** en variables CSS tomadas del logo de la empresa.
- 🧩 **Iconos SVG propios** en un único componente reutilizable (sin librerías externas).
- 🔎 Metaetiquetas básicas de **SEO** y fuentes de Google (Montserrat y Open Sans).

## Tecnologías

| Herramienta | Uso |
|---|---|
| [React 19](https://react.dev/) | Construcción de la interfaz por componentes |
| [Vite 8](https://vite.dev/) | Servidor de desarrollo y empaquetado para producción |
| CSS3 (sin frameworks) | Estilos por componente + variables globales |
| [ESLint](https://eslint.org/) | Análisis estático del código (reglas de React Hooks y React Refresh) |
| Google Fonts | Tipografías Montserrat (títulos) y Open Sans (texto) |

## Requisitos previos

- [Node.js](https://nodejs.org/) **20.19 o superior** (recomendado: versión LTS más reciente)
- npm (incluido con Node.js)

## Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/D-trespalacios025-dev/ProyectoINCOIN.git

# 2. Entrar a la carpeta del proyecto
cd ProyectoINCOIN

# 3. Instalar las dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev
```

Luego abre en el navegador la dirección que aparece en la consola (normalmente
`http://localhost:5173`).

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con recarga automática |
| `npm run build` | Genera la versión optimizada para producción en la carpeta `dist/` |
| `npm run preview` | Sirve localmente la versión de producción para revisarla |
| `npm run lint` | Revisa el código con ESLint |

## Estructura del proyecto

```
ProyectoINCOIN/
├─ index.html                  → Página base (título, metaetiquetas, fuentes, favicon)
├─ logo.png                    → Logo original de la empresa
├─ public/
│  └─ logo.png                 → Logo usado como icono de la pestaña del navegador
├─ src/
│  ├─ main.jsx                 → Punto de entrada: monta <App /> en el div #root
│  ├─ App.jsx                  → Une todas las secciones en orden
│  ├─ index.css                → Variables de color, reset y clases reutilizables
│  ├─ assets/
│  │  ├─ logo.png              → Logo mostrado en el navbar y el pie de página
│  │  └─ imagenes/             → Fotografías de obras y proyectos
│  ├─ datos/
│  │  ├─ contenido.js          → TODOS los textos: empresa, menú, servicios, proyectos...
│  │  └─ imagenes.js           → Importación centralizada de las fotografías
│  └─ componentes/             → Una pareja .jsx + .css por cada sección
│     ├─ Navbar               → Barra de navegación y barra superior de contacto
│     ├─ Inicio               → Portada (hero)
│     ├─ Nosotros             → Quiénes somos y valores corporativos
│     ├─ Servicios            → Consultoría, construcción, supervisión y gerencia
│     ├─ Proyectos            → Tarjetas con filtro + galería
│     ├─ Proceso              → Los 6 pasos de trabajo
│     ├─ Sectores             → Sectores atendidos
│     ├─ PorQueElegirnos      → Razones para elegir a INCOIN
│     ├─ Contacto             → Datos de contacto + formulario a WhatsApp
│     ├─ Footer               → Pie de página
│     ├─ BotonWhatsApp        → Botón flotante
│     └─ Icono.jsx            → Todos los iconos SVG de la página
├─ eslint.config.js
├─ vite.config.js
└─ package.json
```

## Secciones de la página

1. **Inicio** — Portada con imagen principal y llamado a la acción.
2. **Nosotros** — Presentación de la empresa y sus valores (compromiso, calidad, responsabilidad, transparencia, trabajo en equipo e innovación).
3. **Servicios** — Consultoría, Construcción, Supervisión y Gerencia de proyectos.
4. **Proyectos** — Obras ejecutadas y en ejecución con ubicación, tipo y descripción, más una galería.
5. **Nuestro proceso** — Consulta → Diagnóstico → Diseño → Planeación → Ejecución → Supervisión y entrega.
6. **Sectores** — Residencial horizontal y vertical, privado, público e infraestructura vial.
7. **¿Por qué elegirnos?** — Experiencia, calidad, cumplimiento, seguridad, soluciones integrales y transparencia.
8. **Contacto** — Teléfono, WhatsApp, correo, ubicación, Instagram y formulario.

## Cómo modificar el contenido

### Cambiar textos, agregar un proyecto o un servicio
Edita la lista correspondiente en [`src/datos/contenido.js`](src/datos/contenido.js)
(`servicios`, `proyectos`, `galeria`, `sectores`, `razones`, `pasosProceso`, `valores`).
Al agregar un elemento nuevo, la tarjeta aparece automáticamente en la página.

Ejemplo de un proyecto nuevo:

```js
{
  nombre: 'PAVIMENTACIÓN URBANA',
  tipo: 'Infraestructura vial',
  ubicacion: 'Valledupar, Cesar',
  descripcion: 'Pavimentación en concreto rígido de vías urbanas.',
  imagen: imagenes.proyecto1,
  estado: 'en-ejecucion', // 'ejecutado' o 'en-ejecucion'
}
```

### Cambiar teléfono, correo, WhatsApp o Instagram
Todos los datos están agrupados en el objeto `empresa`, al inicio de `src/datos/contenido.js`.

### Agregar o reemplazar fotografías
1. Guarda la foto en `src/assets/imagenes/` (por ejemplo `obra1.jpg`).
2. Impórtala en [`src/datos/imagenes.js`](src/datos/imagenes.js):
   ```js
   import obra1 from '../assets/imagenes/obra1.jpg'
   ```
3. Asígnala a una clave del objeto `imagenes` (por ejemplo `proyecto10: obra1`) y úsala en `contenido.js`.

### Cambiar los colores
Los colores están definidos una sola vez en `src/index.css`, dentro de `:root`:

| Variable | Color | Uso |
|---|---|---|
| `--azul-oscuro` | `#12314f` | Color principal (logo) |
| `--azul` | `#1c4a79` | Botones y detalles |
| `--azul-claro` | `#2f79b8` | Enlaces y *hover* |
| `--amarillo` | `#f5a524` | Color de acento |

## Conceptos de React aplicados

| Concepto | Dónde se ve | Para qué se usó |
|---|---|---|
| **Componentes** | Carpeta `componentes/` | Dividir la página en partes pequeñas y reutilizables |
| **Props** | `<Icono nombre="casco" tamano={40} />` | Enviar información a un componente |
| **`useState`** | `Navbar.jsx`, `Proyectos.jsx`, `Contacto.jsx`, `BotonWhatsApp.jsx` | Menú abierto, filtro activo, datos del formulario, visibilidad del botón |
| **`useEffect`** | `Navbar.jsx`, `BotonWhatsApp.jsx` | Escuchar el scroll de la página y limpiar el evento |
| **`.map()`** | Casi todas las secciones | Renderizar una tarjeta por cada elemento de una lista |
| **`.filter()`** | `Proyectos.jsx` | Mostrar solo los proyectos según su estado |
| **Formularios controlados** | `Contacto.jsx` | React guarda y controla lo que escribe el usuario |
| **Renderizado condicional** | `Navbar.jsx`, `Proyectos.jsx` | Cambiar clases, iconos y etiquetas según el estado |

## Despliegue

El proyecto genera archivos estáticos, por lo que puede publicarse gratis en servicios como
**Vercel**, **Netlify** o **GitHub Pages**:

```bash
npm run build
```

El contenido de la carpeta `dist/` es el que se publica.

> **GitHub Pages:** si el sitio se publica en `https://<usuario>.github.io/ProyectoINCOIN/`,
> agrega `base: '/ProyectoINCOIN/'` en `vite.config.js` antes de compilar.

## Contacto de la empresa

| Medio | Dato |
|---|---|
| 📞 Teléfono / WhatsApp | 310 818 3363 |
| ✉️ Correo | incoin2026@gmail.com |
| 📍 Ubicación | La Jagua de Ibirico, Cesar — Colombia |
| 📷 Instagram | [@incoinconst](https://www.instagram.com/incoinconst) |

---

<div align="center">

Desarrollado con ❤️ usando React + Vite

</div>
