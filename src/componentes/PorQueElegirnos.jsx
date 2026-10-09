/* =========================================================
   SECCIÓN 7: ¿POR QUÉ ELEGIRNOS?
   Presenta las razones o ventajas de trabajar con INCOIN
   y termina con una invitación a contactar a la empresa.
   ========================================================= */

import { razones } from '../datos/contenido'
import Icono from './Icono'
import './PorQueElegirnos.css'

function PorQueElegirnos() {
  return (
    <section id="elegirnos" className="seccion">
      <div className="contenedor">
        <div className="encabezado-seccion">
          <span className="etiqueta">¿Por qué elegirnos?</span>
          <h2 className="titulo-seccion">Nuestras ventajas</h2>
          <p className="subtitulo-seccion">
            Trabajamos con criterios técnicos claros y acompañamiento permanente en cada etapa del
            proyecto.
          </p>
        </div>

        <div className="grid-razones">
          {razones.map((razon) => (
            <article className="tarjeta-razon" key={razon.titulo}>
              <div className="razon-icono">
                <Icono nombre={razon.icono} tamano={30} />
              </div>
              <div>
                <h3>{razon.titulo}</h3>
                <p>{razon.descripcion}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Llamado a la acción: invita a ir a la sección de contacto */}
        <div className="llamado">
          <div>
            <h3>¿Listo para empezar tu proyecto con nosotros?</h3>
            <p>Cuéntanos tu idea y te acompañamos desde el primer estudio hasta la entrega final.</p>
          </div>
          <a href="#contacto" className="boton boton-principal">
            Solicita una cotización
            <Icono nombre="flecha" tamano={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default PorQueElegirnos
