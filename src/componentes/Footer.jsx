/* =========================================================
   PIE DE PÁGINA (FOOTER)
   Aparece al final de la web con el logo, un resumen de la empresa,
   los enlaces del menú, los servicios y los datos de contacto.
   ========================================================= */

import { enlacesMenu, servicios, empresa } from '../datos/contenido'
import Icono from './Icono'
import logo from '../assets/logo.png'
import './Footer.css'

function Footer() {
  // Toma el año actual del computador para que el "derechos reservados" no quede desactualizado
  const anioActual = new Date().getFullYear()

  return (
    <footer className="pie">
      <div className="contenedor pie-contenido">
        {/* Columna 1: logo y descripción */}
        <div className="pie-columna">
          <img src={logo} alt="Logo de INCOIN" className="pie-logo" />
          <p>
            Empresa colombiana de consultoría, interventoría y construcción de proyectos de
            ingeniería e infraestructura.
          </p>
          <a
            href={empresa.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="pie-red"
            aria-label="Instagram de INCOIN"
          >
            <Icono nombre="instagram" tamano={22} />
          </a>
        </div>

        {/* Columna 2: enlaces del menú */}
        <div className="pie-columna">
          <h4>Navegación</h4>
          <ul>
            {enlacesMenu.map((enlace) => (
              <li key={enlace.id}>
                <a href={`#${enlace.id}`}>{enlace.nombre}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: servicios (se reutiliza la misma lista de la sección Servicios) */}
        <div className="pie-columna">
          <h4>Servicios</h4>
          <ul>
            {servicios.map((servicio) => (
              <li key={servicio.titulo}>
                <a href="#servicios">{servicio.titulo}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4: contacto */}
        <div className="pie-columna">
          <h4>Contacto</h4>
          <ul className="pie-contacto">
            <li>
              <Icono nombre="telefono" tamano={17} />
              {empresa.telefono}
            </li>
            <li>
              <Icono nombre="correo" tamano={17} />
              {empresa.correo}
            </li>
            <li>
              <Icono nombre="ubicacion" tamano={17} />
              {empresa.ubicacion}
            </li>
          </ul>
        </div>
      </div>

      {/* Línea final con los derechos reservados */}
      <div className="pie-final">
        <div className="contenedor">
          <p>
            © {anioActual} {empresa.nombre} · {empresa.eslogan}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
