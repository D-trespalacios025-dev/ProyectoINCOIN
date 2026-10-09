/* =========================================================
   BOTÓN FLOTANTE DE WHATSAPP
   Es el botón verde que queda fijo en la esquina inferior derecha.
   Solo aparece cuando el usuario ya bajó un poco en la página.
   ========================================================= */

import { useState, useEffect } from 'react'
import { empresa } from '../datos/contenido'
import Icono from './Icono'
import './BotonWhatsApp.css'

function BotonWhatsApp() {
  // Estado que indica si el botón debe verse o no
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function alHacerScroll() {
      // Si el usuario bajó más de 400 píxeles, se muestra el botón
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', alHacerScroll)
    return () => window.removeEventListener('scroll', alHacerScroll)
  }, [])

  return (
    <a
      href={`https://wa.me/${empresa.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className={`boton-whatsapp ${visible ? 'visible' : ''}`}
      aria-label="Escribir a INCOIN por WhatsApp"
    >
      <Icono nombre="whatsapp" tamano={30} />
      <span>Escríbenos</span>
    </a>
  )
}

export default BotonWhatsApp
