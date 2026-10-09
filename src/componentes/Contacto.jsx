/* =========================================================
   SECCIÓN 8: CONTACTO
   Tiene dos partes:
   1. Los datos de contacto de la empresa (teléfono, WhatsApp, correo, etc.)
   2. Un formulario sencillo. Al enviarlo se abre WhatsApp con el mensaje
      ya escrito, para no necesitar un servidor ni base de datos.
   ========================================================= */

import { useState } from 'react'
import { empresa } from '../datos/contenido'
import Icono from './Icono'
import './Contacto.css'

function Contacto() {
  // Un solo estado guarda todos los campos del formulario dentro de un objeto
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  })

  // Esta función se ejecuta cada vez que el usuario escribe en un campo.
  // event.target.name es el nombre del campo y event.target.value lo que escribió.
  function manejarCambio(event) {
    const { name, value } = event.target
    setFormulario({
      ...formulario, // Copia lo que ya estaba escrito en los otros campos
      [name]: value, // Y actualiza solo el campo que se está escribiendo
    })
  }

  // Se ejecuta al presionar el botón "Enviar mensaje"
  function manejarEnvio(event) {
    event.preventDefault() // Evita que la página se recargue

    // Se arma el texto del mensaje con los datos escritos
    const texto =
      `Hola INCOIN, mi nombre es ${formulario.nombre}.%0A` +
      `Correo: ${formulario.correo}%0A` +
      `Teléfono: ${formulario.telefono}%0A` +
      `Mensaje: ${formulario.mensaje}`

    // Se abre WhatsApp en una pestaña nueva con el mensaje listo para enviar
    window.open(`https://wa.me/${empresa.whatsapp}?text=${texto}`, '_blank')

    // Se limpia el formulario
    setFormulario({ nombre: '', correo: '', telefono: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="seccion contacto">
      <div className="contenedor">
        <div className="encabezado-seccion">
          <span className="etiqueta etiqueta-clara">Contacto</span>
          <h2 className="titulo-seccion titulo-claro">¿Tienes un proyecto en mente? Hablemos.</h2>
          <p className="subtitulo-seccion subtitulo-claro">
            Escríbenos y con gusto te asesoramos sobre la mejor solución para tu proyecto.
          </p>
        </div>

        <div className="contacto-bloque">
          {/* ---------- COLUMNA 1: DATOS DE CONTACTO ---------- */}
          <div className="contacto-datos">
            <a href={`tel:+57${empresa.whatsapp.slice(2)}`} className="contacto-item">
              <div className="contacto-icono">
                <Icono nombre="telefono" tamano={24} />
              </div>
              <div>
                <strong>Teléfono</strong>
                <span>{empresa.telefono}</span>
              </div>
            </a>

            <a
              href={`https://wa.me/${empresa.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="contacto-item"
            >
              <div className="contacto-icono">
                <Icono nombre="whatsapp" tamano={24} />
              </div>
              <div>
                <strong>WhatsApp</strong>
                <span>{empresa.whatsappTexto}</span>
              </div>
            </a>

            <a href={`mailto:${empresa.correo}`} className="contacto-item">
              <div className="contacto-icono">
                <Icono nombre="correo" tamano={24} />
              </div>
              <div>
                <strong>Correo</strong>
                <span>{empresa.correo}</span>
              </div>
            </a>

            <div className="contacto-item">
              <div className="contacto-icono">
                <Icono nombre="ubicacion" tamano={24} />
              </div>
              <div>
                <strong>Ubicación</strong>
                <span>{empresa.ubicacion}</span>
              </div>
            </div>

            <a
              href={empresa.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="contacto-item"
            >
              <div className="contacto-icono">
                <Icono nombre="instagram" tamano={24} />
              </div>
              <div>
                <strong>Instagram</strong>
                <span>{empresa.instagram}</span>
              </div>
            </a>
          </div>

          {/* ---------- COLUMNA 2: FORMULARIO ---------- */}
          <form className="formulario" onSubmit={manejarEnvio}>
            <h3>Escríbenos</h3>

            <div className="campo">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre} /* El valor lo controla React */
                onChange={manejarCambio}
                placeholder="Ej: Juan Pérez"
                required /* El navegador obliga a llenarlo */
              />
            </div>

            <div className="campo-doble">
              <div className="campo">
                <label htmlFor="correo">Correo electrónico</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formulario.correo}
                  onChange={manejarCambio}
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>

              <div className="campo">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formulario.telefono}
                  onChange={manejarCambio}
                  placeholder="300 000 0000"
                  required
                />
              </div>
            </div>

            <div className="campo">
              <label htmlFor="mensaje">Cuéntanos sobre tu proyecto</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formulario.mensaje}
                onChange={manejarCambio}
                placeholder="Tipo de proyecto, ubicación, alcance..."
                required
              ></textarea>
            </div>

            <button type="submit" className="boton boton-principal boton-enviar">
              Enviar mensaje por WhatsApp
              <Icono nombre="whatsapp" tamano={20} />
            </button>

            <p className="nota-formulario">
              Al enviar se abrirá WhatsApp con tu mensaje ya escrito para que lo confirmes.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacto
