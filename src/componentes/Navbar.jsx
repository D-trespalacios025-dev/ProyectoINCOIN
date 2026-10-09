/* =========================================================
   NAVBAR (barra de navegación superior)
   Contiene:
   - Una barra pequeña arriba con el correo, el WhatsApp y el Instagram
   - El logo de INCOIN
   - El menú con los enlaces a cada sección
   - Un botón de "hamburguesa" para ver el menú en el celular
   ========================================================= */

import { useState, useEffect } from 'react'
import { enlacesMenu, empresa } from '../datos/contenido'
import Icono from './Icono'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  // ESTADO 1: indica si el menú del celular está abierto (true) o cerrado (false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  // ESTADO 2: indica si el usuario ya bajó en la página (para achicar el navbar y ponerle sombra)
  const [conScroll, setConScroll] = useState(false)

  // ESTADO 3: guarda cuál sección se está viendo, para resaltar ese enlace del menú
  const [seccionActiva, setSeccionActiva] = useState('inicio')

  // useEffect ejecuta código cuando el componente aparece en pantalla.
  // Aquí "escuchamos" el scroll (cuando el usuario sube o baja la página).
  useEffect(() => {
    function alHacerScroll() {
      // Si bajó más de 60 píxeles, activamos el estilo compacto del navbar
      setConScroll(window.scrollY > 60)

      // Revisamos cada sección para saber cuál está ocupando la pantalla
      enlacesMenu.forEach((enlace) => {
        const seccion = document.getElementById(enlace.id)
        if (seccion) {
          const inicio = seccion.offsetTop - 120
          const fin = inicio + seccion.offsetHeight
          if (window.scrollY >= inicio && window.scrollY < fin) {
            setSeccionActiva(enlace.id)
          }
        }
      })
    }

    window.addEventListener('scroll', alHacerScroll)

    // Esta línea "limpia" el evento cuando ya no se necesita (buena práctica)
    return () => window.removeEventListener('scroll', alHacerScroll)
  }, [])

  return (
    <header className={`navbar ${conScroll ? 'navbar-scroll' : ''}`}>
      {/* ---------- BARRA SUPERIOR DE CONTACTO ---------- */}
      <div className="barra-superior">
        <div className="contenedor barra-superior-contenido">
          <a href={`mailto:${empresa.correo}`} className="barra-item">
            <Icono nombre="correo" tamano={16} />
            {empresa.correo}
          </a>
          <a
            href={`https://wa.me/${empresa.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="barra-item"
          >
            <Icono nombre="whatsapp" tamano={16} />
            {empresa.whatsappTexto}
          </a>
          <a href={empresa.instagramUrl} target="_blank" rel="noreferrer" className="barra-item">
            <Icono nombre="instagram" tamano={16} />
            {empresa.instagram}
          </a>
        </div>
      </div>

      {/* ---------- BARRA PRINCIPAL: LOGO + MENÚ ---------- */}
      <nav className="contenedor navbar-contenido">
        {/* Logo: al hacer clic vuelve al inicio */}
        <a href="#inicio" className="logo" onClick={() => setMenuAbierto(false)}>
          <img src={logo} alt="Logo de INCOIN" />
        </a>

        {/* Lista de enlaces.
            Se genera automáticamente con .map() a partir de la lista "enlacesMenu".
            Así no hay que escribir 8 veces el mismo código. */}
        <ul className={`menu ${menuAbierto ? 'menu-abierto' : ''}`}>
          {enlacesMenu.map((enlace) => (
            <li key={enlace.id}>
              <a
                href={`#${enlace.id}`}
                className={seccionActiva === enlace.id ? 'enlace activo' : 'enlace'}
                onClick={() => setMenuAbierto(false)} // Cierra el menú al elegir una opción
              >
                {enlace.nombre}
              </a>
            </li>
          ))}

          {/* Botón destacado dentro del menú */}
          <li>
            <a href="#contacto" className="boton boton-principal boton-menu" onClick={() => setMenuAbierto(false)}>
              Cotizar
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa: solo se ve en pantallas pequeñas.
            Al hacer clic cambia el estado menuAbierto de false a true (y viceversa). */}
        <button
          className="boton-hamburguesa"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir o cerrar el menú"
        >
          <Icono nombre={menuAbierto ? 'cerrar' : 'menu'} tamano={28} />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
