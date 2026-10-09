/* =========================================================
   SECCIÓN 3: SERVICIOS
   Muestra las 4 líneas de servicio de INCOIN en tarjetas.
   Los datos salen de la lista "servicios" del archivo datos/contenido.js
   ========================================================= */

import { servicios } from '../datos/contenido'
import Icono from './Icono'
import './Servicios.css'

function Servicios() {
  return (
    <section id="servicios" className="seccion seccion-gris">
      <div className="contenedor">
        <div className="encabezado-seccion">
          <span className="etiqueta">Servicios</span>
          <h2 className="titulo-seccion">Lo que hacemos</h2>
          <p className="subtitulo-seccion">
            Acompañamos el proyecto en todas sus etapas: desde los estudios iniciales hasta la
            construcción y la supervisión de la obra.
          </p>
        </div>

        {/* Se crea una tarjeta por cada servicio de la lista.
            key es un identificador único que React necesita para las listas. */}
        <div className="grid-servicios">
          {servicios.map((servicio) => (
            <article className="tarjeta-servicio" key={servicio.titulo}>
              <div className="servicio-icono">
                <Icono nombre={servicio.icono} tamano={36} />
              </div>

              <h3>{servicio.titulo}</h3>
              <p className="servicio-descripcion">{servicio.descripcion}</p>

              {/* Lista de actividades incluidas en el servicio */}
              <ul className="servicio-items">
                {servicio.items.map((item) => (
                  <li key={item}>
                    <Icono nombre="check" tamano={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
