/* =========================================================
   SECCIÓN 5: NUESTRO PROCESO
   Muestra los 6 pasos de trabajo de INCOIN, del 01 al 06,
   conectados visualmente como una línea de tiempo.
   ========================================================= */

import { pasosProceso } from '../datos/contenido'
import Icono from './Icono'
import './Proceso.css'

function Proceso() {
  return (
    <section id="proceso" className="seccion proceso">
      <div className="contenedor">
        <div className="encabezado-seccion">
          <span className="etiqueta etiqueta-clara">Nuestro proceso</span>
          <h2 className="titulo-seccion titulo-claro">Así trabajamos</h2>
          <p className="subtitulo-seccion subtitulo-claro">
            Una metodología ordenada que va desde entender la necesidad del cliente hasta la entrega
            final del proyecto.
          </p>
        </div>

        {/* Se genera un paso por cada elemento de la lista pasosProceso */}
        <div className="grid-proceso">
          {pasosProceso.map((paso) => (
            <article className="paso" key={paso.numero}>
              {/* Número grande de fondo (01, 02, 03...) */}
              <span className="paso-numero">{paso.numero}</span>

              <div className="paso-icono">
                <Icono nombre={paso.icono} tamano={32} />
              </div>

              <h3>{paso.titulo}</h3>
              <p>{paso.descripcion}</p>

              {/* Flecha que conecta con el siguiente paso (se oculta en celular) */}
              <span className="paso-flecha">
                <Icono nombre="flecha" tamano={22} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proceso
