/* =========================================================
   COMPONENTE ICONO
   Dibuja iconos usando SVG (gráficos vectoriales que no se pixelan).

   Se hizo así para NO instalar librerías externas de iconos.
   Se usa de esta forma dentro de cualquier componente:

        <Icono nombre="casco" tamano={40} />

   - nombre: cuál icono se quiere dibujar (ver la lista de abajo)
   - tamano: ancho y alto en píxeles (por defecto 28)
   ========================================================= */

// Objeto que guarda el dibujo (las líneas) de cada icono.
// La clave es el nombre y el valor son las figuras que forman el icono.
const dibujos = {
  // --- Servicios ---
  topografia: (
    <>
      <path d="M12 3.5v6" />
      <path d="M12 9.5 6 20.5" />
      <path d="m12 9.5 6 11" />
      <path d="M4 10.5h16" />
      <circle cx="12" cy="3.5" r="1.5" />
    </>
  ),
  construccion: (
    <>
      <path d="M3 20h18" />
      <path d="M4 20V9h16v11" />
      <path d="M4 14.5h16" />
      <path d="M9.5 9v5.5" />
      <path d="M14.5 14.5V20" />
      <path d="M9.5 14.5V20" />
    </>
  ),
  supervision: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
      <path d="m7.8 10.6 2 2 3.5-3.6" />
    </>
  ),
  gerencia: (
    <>
      <rect x="9" y="3" width="6" height="4.5" rx="1" />
      <rect x="3" y="16.5" width="6" height="4.5" rx="1" />
      <rect x="15" y="16.5" width="6" height="4.5" rx="1" />
      <path d="M12 7.5v4.5" />
      <path d="M6 16.5V12h12v4.5" />
    </>
  ),

  // --- Valores y razones ---
  apreton: (
    <>
      <path d="m3 12 4-4 5 4 3-2 6 5" />
      <path d="M21 15v-4" />
      <path d="M3 12v4l5 4 3-2" />
      <path d="m11 18 3 2 4-3" />
    </>
  ),
  estrella: <path d="m12 3.5 2.7 5.6 6 .8-4.4 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6L3.3 9.9l6-.8z" />,
  escudo: (
    <>
      <path d="M12 3.2 20 6v6c0 4.8-3.4 7.9-8 9-4.6-1.1-8-4.2-8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
 edificio: (
    <>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </>
  ),
  ojo: (
    <>
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  equipo: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9.5" r="2.2" />
      <path d="M3 19c0-3.3 2.7-5 6-5s6 1.7 6 5" />
      <path d="M16 14.5c2.8 0 5 1.4 5 4.5" />
    </>
  ),
  bombillo: (
    <>
      <path d="M9.5 17.5a6 6 0 1 1 5 0" />
      <path d="M9.5 18.5h5" />
      <path d="M10.5 21h3" />
    </>
  ),
  casco: (
    <>
      <path d="M3.5 17.5h17" />
      <path d="M5.5 17.5v-2.8A6.5 6.5 0 0 1 12 8.2a6.5 6.5 0 0 1 6.5 6.5v2.8" />
      <path d="M9.8 8.9V5.5h4.4v3.4" />
    </>
  ),
  reloj: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),
  engranaje: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.4 5.4l2.1 2.1M16.5 16.5l2.1 2.1M18.6 5.4l-2.1 2.1M7.5 16.5l-2.1 2.1" />
    </>
  ),

  // --- Proceso ---
  chat: (
    <>
      <path d="M4 5h16v11H9.5L4 20z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  lupa: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
    </>
  ),
  regla: (
    <>
      <path d="M14.5 3.5 20.5 9.5 9.5 20.5 3.5 14.5z" />
      <path d="m12.5 5.5 1.8 1.8M10 8l1.8 1.8M7.5 10.5l1.8 1.8" />
    </>
  ),
  calendario: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14h3M13 14h3M8 17h3" />
    </>
  ),
  grua: (
    <>
      <path d="M4 21h16" />
      <path d="M5.5 21V3.5h13" />
      <path d="m5.5 3.5 13 5" />
      <path d="M18.5 8.5v4.5" />
      <path d="M15.5 13h6" />
    </>
  ),
  entrega: (
    <>
      <rect x="5" y="4.5" width="14" height="16" rx="2" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="m9 12.5 2 2 4-4" />
    </>
  ),

  // --- Sectores ---
  casa: (
    <>
      <path d="m3 11 9-7 9 7" />
      <path d="M5.5 9.7V20h13V9.7" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  tienda: (
    <>
      <path d="M4 9h16l-1.2-4.5H5.2z" />
      <path d="M5.5 9v11h13V9" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  fabrica: (
    <>
      <path d="M3 20.5h18" />
      <path d="M3.5 20.5V10l5 3V10l5 3V9.5l5 3v8" />
      <path d="M18.5 12.5V4.5h-2.5" />
    </>
  ),
  institucional: (
    <>
      <path d="m3 9.5 9-5.5 9 5.5" />
      <path d="M5.5 9.5V18M9.5 9.5V18M14.5 9.5V18M18.5 9.5V18" />
      <path d="M3 20.5h18" />
    </>
  ),
  publico: (
    <>
      <path d="M3 20.5h18" />
      <path d="M5 20.5V10h14v10.5" />
      <path d="m3.5 10 8.5-6 8.5 6" />
      <path d="M10 20.5V15h4v5.5" />
    </>
  ),
  carretera: (
    <>
      <path d="M7.5 3.5 4 20.5" />
      <path d="m16.5 3.5 3.5 17" />
      <path d="M12 4v3M12 10.5v3M12 17v3" />
    </>
  ),

  // --- Contacto y redes ---
  telefono: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 2.8a9.2 9.2 0 0 0-7.9 13.9L2.8 21.2l4.7-1.3A9.2 9.2 0 1 0 12 2.8z" />
      <path d="M8.9 8.2c.3-.1.6 0 .8.3l.8 1.3c.1.2.1.5-.1.7l-.5.5c.6 1.3 1.6 2.3 2.9 2.9l.5-.5c.2-.2.5-.2.7-.1l1.3.8c.3.2.4.5.3.8-.3.9-1.2 1.4-2.1 1.2-2.8-.5-5.2-2.9-5.8-5.8-.2-.9.3-1.8 1.2-2.1z" />
    </>
  ),
  correo: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  ubicacion: (
    <>
      <path d="M12 21.5s7.5-6.6 7.5-11.5a7.5 7.5 0 1 0-15 0c0 4.9 7.5 11.5 7.5 11.5z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" />
    </>
  ),

  // --- Iconos de apoyo (flechas, menú, etc.) ---
  flecha: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  cerrar: <path d="M6 6l12 12M18 6 6 18" />,
}

function Icono({ nombre, tamano = 28, className = '' }) {
  // Si el nombre no existe en la lista, no dibuja nada (evita que la página falle)
  const dibujo = dibujos[nombre]
  if (!dibujo) return null

  return (
    <svg
      className={className}
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" /* Toma el color del texto donde se use */
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true" /* Es decorativo: los lectores de pantalla lo ignoran */
    >
      {dibujo}
    </svg>
  )
}

export default Icono
