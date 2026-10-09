/* =========================================================
   SECCIÓN 2: NOSOTROS
   Contiene: quiénes somos, misión, visión, valores y experiencia.
   ========================================================= */

import { valores } from '../datos/contenido'
import { imagenes } from '../datos/imagenes'
import Icono from './Icono'
import './Nosotros.css'

function Nosotros() {
  return (
    <section id="nosotros" className="seccion">
      <div className="contenedor">
        {/* Encabezado de la sección */}
        <div className="encabezado-seccion">
          <span className="etiqueta">Nosotros</span>
          <h2 className="titulo-seccion">¿Quiénes somos?</h2>
          <p className="subtitulo-seccion">
            Somos una empresa dedicada al desarrollo de proyectos de ingeniería, construcción e
            infraestructura en Colombia, ofreciendo servicios de consultoría, interventoría,
            supervisión y ejecución de obras. Nuestro propósito es aportar soluciones eficientes y
            de calidad que contribuyan al desarrollo de nuestros clientes y de las comunidades.
          </p>
        </div>

        {/* Bloque de dos columnas: imagen a la izquierda, misión y visión a la derecha */}
        <div className="nosotros-bloque">
          <div className="nosotros-imagen">
            <img src={imagenes.nosotros} alt="Ingeniero de INCOIN revisando planos de un proyecto" />
            {/* Recuadro amarillo decorativo sobre la imagen */}
            <div className="nosotros-sello">
              <Icono nombre="casco" tamano={34} />
              <span>Equipo profesional y multidisciplinario</span>
            </div>
          </div>

          <div className="nosotros-textos">
            {/* Tarjeta de MISIÓN */}
            <article className="tarjeta-mv">
              <div className="mv-icono">
                <Icono nombre="flecha" tamano={26} />
              </div>
              <div>
                <h3>Misión</h3>
                <p>
                  Desarrollar proyectos de ingeniería, consultoría, interventoría y construcción con
                  soluciones eficientes, calidad técnica y compromiso, generando valor para nuestros
                  clientes y contribuyendo al desarrollo sostenible de las comunidades.
                </p>
              </div>
            </article>

            {/* Tarjeta de VISIÓN */}
            <article className="tarjeta-mv">
              <div className="mv-icono">
                <Icono nombre="ojo" tamano={26} />
              </div>
              <div>
                <h3>Visión</h3>
                <p>
                  Consolidarnos como una empresa referente en Colombia en el desarrollo de proyectos
                  de ingeniería, infraestructura y construcción, reconocida por la calidad de
                  nuestros servicios, cumplimiento, capacidad técnica y compromiso.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* ---------- VALORES ----------
            Se recorre la lista "valores" con .map() y se crea una tarjeta por cada valor */}
        <h3 className="titulo-valores">Nuestros valores</h3>
        <div className="grid-valores">
          {valores.map((valor) => (
            <div className="tarjeta-valor" key={valor.nombre}>
              <Icono nombre={valor.icono} tamano={30} />
              <span>{valor.nombre}</span>
            </div>
          ))}
        </div>

        {/* ---------- EXPERIENCIA Y TRAYECTORIA ---------- */}
        <div className="experiencia">
          <h3>Experiencia y trayectoria</h3>
          <p>
            Nuestra experiencia se construye a través de la participación en proyectos de
            infraestructura, construcción, consultoría e interventoría, respaldados por un equipo
            profesional y multidisciplinario.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
