# INCOIN — Página web (React + Vite)

Página web informativa (de una sola página, tipo *landing*) para **INCOIN — Ingeniería y
Construcción Integral**, hecha con **React** y **Vite**.

---

## 1. Cómo ejecutar el proyecto

```bash
npm install
```

```bash
npm run dev
```

Luego abrir en el navegador la dirección que aparece en la consola (normalmente
`http://localhost:5173`).

Otros comandos:

| Comando | Para qué sirve |
|---|---|
| `npm run dev` | Ejecuta la página en modo desarrollo (se actualiza sola al guardar) |
| `npm run build` | Genera la versión final en la carpeta `dist/` (lista para publicar) |
| `npm run preview` | Muestra cómo quedó la versión final |
| `npm run lint` | Revisa que no haya errores en el código |

---

## 2. Organización de las carpetas

```
proyecto_incoin_web/
├─ index.html                  → Página base (título, fuentes, icono de pestaña)
├─ logo.jpg                    → Logo original entregado por la empresa
├─ public/
│  └─ logo.jpg                 → Copia del logo usada como icono del navegador
└─ src/
   ├─ main.jsx                 → Arranca la aplicación de React
   ├─ index.css                → Colores, tipografías, botones y estilos generales
   ├─ App.jsx                  → Une todas las secciones en orden
   ├─ assets/
   │  └─ logo.jpg              → Logo mostrado en el navbar y el pie de página
   ├─ datos/
   │  ├─ contenido.js          → TODOS los textos: servicios, proyectos, sectores, etc.
   │  └─ imagenes.js           → TODAS las fotografías usadas en la página
   └─ componentes/             → Una pareja .jsx + .css por cada sección
      ├─ Navbar.jsx / .css           → Barra de navegación
      ├─ Inicio.jsx / .css           → 1. Inicio
      ├─ Nosotros.jsx / .css         → 2. Nosotros
      ├─ Servicios.jsx / .css        → 3. Servicios
      ├─ Proyectos.jsx / .css        → 4. Proyectos
      ├─ Proceso.jsx / .css          → 5. Nuestro proceso
      ├─ Sectores.jsx / .css         → 6. Sectores
      ├─ PorQueElegirnos.jsx / .css  → 7. ¿Por qué elegirnos?
      ├─ Contacto.jsx / .css         → 8. Contacto
      ├─ Footer.jsx / .css           → Pie de página
      ├─ BotonWhatsApp.jsx / .css    → Botón flotante de WhatsApp
      └─ Icono.jsx                   → Todos los iconos SVG de la página
```

**Idea principal:** el *contenido* (textos y fotos) está separado del *diseño*.
Para cambiar información casi nunca hay que tocar los componentes: basta con editar
`src/datos/contenido.js`.

---

## 3. Cómo modificar lo más común

### Cambiar un texto, agregar un proyecto o un servicio
Abrir `src/datos/contenido.js` y editar la lista correspondiente
(`servicios`, `proyectos`, `sectores`, `razones`, `pasosProceso`, `valores`).
Al agregar un elemento nuevo a la lista, la tarjeta aparece automáticamente en la página.

### Cambiar teléfono, correo, WhatsApp o Instagram
Están todos juntos al inicio de `src/datos/contenido.js`, en el objeto `empresa`.

### Poner las fotos reales de INCOIN
1. Guardar la foto en `src/assets/` (por ejemplo `obra1.jpg`).
2. En `src/datos/imagenes.js`, escribir arriba: `import obra1 from '../assets/obra1.jpg'`.
3. Reemplazar la dirección de internet por la variable: `hero: obra1,`.

### Cambiar los colores
Están definidos una sola vez en `src/index.css`, dentro de `:root`
(azul del logo, amarillo de acento, grises). Al cambiarlos ahí, cambia toda la página.

---

## 4. Conceptos de React usados (para la sustentación)

| Concepto | Dónde se ve | Para qué se usó |
|---|---|---|
| **Componentes** | Carpeta `componentes/` | Dividir la página en partes pequeñas y reutilizables |
| **props** | `<Icono nombre="casco" tamano={40} />` | Enviar información a un componente |
| **`useState`** | `Navbar.jsx`, `Proyectos.jsx`, `Contacto.jsx` | Guardar datos que cambian: menú abierto, filtro, formulario |
| **`useEffect`** | `Navbar.jsx`, `BotonWhatsApp.jsx` | Detectar el scroll de la página |
| **`.map()`** | Casi todas las secciones | Crear una tarjeta por cada dato de una lista |
| **`.filter()`** | `Proyectos.jsx` | Mostrar solo los proyectos ejecutados o en ejecución |
| **Formularios controlados** | `Contacto.jsx` | React guarda lo que el usuario escribe |

---

## 5. Cosas pendientes por confirmar con la empresa

- Número de teléfono fijo y **dirección exacta** de la oficina (hoy dice "por confirmar").
- Reemplazar los proyectos de ejemplo por los proyectos reales.
- Reemplazar las fotografías de referencia por fotos propias de las obras.
