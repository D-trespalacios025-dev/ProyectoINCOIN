/* =========================================================
   SECCIÓN 6: SECTORES
   Muestra los tipos de clientes y proyectos que atiende INCOIN.
   Cada tarjeta tiene una foto de fondo, un icono y una descripción.
   ========================================================= */

import { sectores } from '../datos/contenido'
import Icono from './Icono'
import './Sectores.css'

function Sectores() {
  return (
    <section id="sectores" className="seccion seccion-gris">
      <div className="contenedor">
        <div className="encabezado-seccion">
          <span className="etiqueta">Sectores</span>
          <h2 className="titulo-seccion">Sectores que atendemos</h2>
          <p className="subtitulo-seccion">
            Desarrollamos proyectos para diferentes sectores, adaptando la solución técnica a las
            necesidades de cada cliente.
          </p>
        </div>

        <div className="grid-sectores">
          {sectores.map((sector) => (
            <article className="tarjeta-sector" key={sector.nombre}>
              {/* La foto se pone como fondo de la tarjeta usando style */}
              <div
                className="sector-fondo"
                style={{ backgroundImage: `url(${sector.imagen})` }}
              ></div>

              {/* Capa oscura para que el texto blanco se lea bien sobre la foto */}
              <div className="sector-capa"></div>

              <div className="sector-contenido">
                <Icono nombre={sector.icono} tamano={38} />
                <h3>{sector.nombre}</h3>
                <p>{sector.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sectores
