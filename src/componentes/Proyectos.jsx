/* =========================================================
   SECCIÓN 4: PROYECTOS
   Muestra las obras de la empresa con sus datos técnicos.
   Tiene 3 botones (filtros) para ver: todos, ejecutados o en ejecución.
   Al final incluye una galería de fotografías.
   ========================================================= */

import { useState } from 'react'
import { proyectos, galeria } from '../datos/contenido'
import Icono from './Icono'
import './Proyectos.css'

function Proyectos() {
  // Guarda el filtro seleccionado. Empieza mostrando todos los proyectos.
  const [filtro, setFiltro] = useState('todos')

  // filter() deja pasar solo los proyectos que cumplen la condición del filtro.
  const proyectosMostrados = proyectos.filter((proyecto) => {
    if (filtro === 'todos') return true
    return proyecto.estado === filtro
  })

  // Lista de botones del filtro (para no repetir código de cada botón)
  const filtros = [
    { valor: 'todos', texto: 'Todos' },
    { valor: 'ejecutado', texto: 'Proyectos ejecutados' },
    { valor: 'en-ejecucion', texto: 'Proyectos en ejecución' },
  ]

  return (
    <section id="proyectos" className="seccion">
      <div className="contenedor">
        <div className="encabezado-seccion">
          <span className="etiqueta">Proyectos</span>
          <h2 className="titulo-seccion">Proyectos destacados</h2>
          <p className="subtitulo-seccion">
            Estos son algunos de los proyectos en los que hemos participado y su
            ubicación.
          </p>
        </div>

        {/* ---------- BOTONES DE FILTRO ---------- */}
        <div className="filtros">
          {filtros.map((opcion) => (
            <button
              key={opcion.valor}
              // Si este botón es el seleccionado, se le agrega la clase "activo"
              className={filtro === opcion.valor ? 'filtro activo' : 'filtro'}
              onClick={() => setFiltro(opcion.valor)} // Cambia el estado al hacer clic
            >
              {opcion.texto}
            </button>
          ))}
        </div>

        {/* ---------- TARJETAS DE PROYECTOS ---------- */}
        <div className="grid-proyectos">
          {proyectosMostrados.map((proyecto) => (
            <article className="tarjeta-proyecto" key={proyecto.nombre}>
              <div className="proyecto-foto">
                <img src={proyecto.imagen} alt={`Fotografía del proyecto ${proyecto.nombre}`} />

                {/* Etiqueta de estado en la esquina de la foto */}
                <span
                  className={
                    proyecto.estado === 'ejecutado' ? 'estado ejecutado' : 'estado en-ejecucion'
                  }
                >
                  {proyecto.estado === 'ejecutado' ? 'Ejecutado' : 'En ejecución'}
                </span>
              </div>

              <div className="proyecto-info">
                <span className="proyecto-tipo">{proyecto.tipo}</span>
                <h3>{proyecto.nombre}</h3>
                <p className="proyecto-descripcion">{proyecto.descripcion}</p>

                {/* Ficha técnica del proyecto */}
                <ul className="proyecto-datos">
                  <li>
                    <Icono nombre="ubicacion" tamano={17} />
                    <span>
                      <strong>Ubicación:</strong> {proyecto.ubicacion}
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- GALERÍA DE FOTOGRAFÍAS ---------- */}
        <h3 className="titulo-galeria">Galería</h3>
        <div className="galeria">
          {galeria.map((foto) => (
            <figure className="galeria-item" key={foto.titulo}>
              <img src={foto.imagen} alt={foto.titulo} />
              {/* El título aparece al pasar el mouse sobre la foto */}
              <figcaption>{foto.titulo}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos
