/* =========================================================
   SECCIÓN 1: INICIO
   Es la primera pantalla que ve el visitante:
   frase de impacto, presentación breve, botones e imagen principal.
   ========================================================= */

import { imagenes } from '../datos/imagenes'
import Icono from './Icono'
import './Inicio.css'

function Inicio() {
  return (
    <section id="inicio" className="inicio">
      {/* Imagen de fondo con una capa azul encima para que el texto se lea bien */}
      <div
        className="inicio-fondo"
        style={{ backgroundImage: `url(${imagenes.hero})` }}
      ></div>
      <div className="inicio-capa"></div>

      {/* Contenido de texto */}
      <div className="contenedor inicio-contenido">
        <span className="inicio-etiqueta">INGENIERÍA Y CONSTRUCCIÓN INTEGRAL</span>

        {/* Frase de impacto */}
        <h1 className="inicio-titulo">
          Diseñamos, formulamos, construimos y supervisamos proyectos que{' '}
          <span className="resaltado">transforman comunidades</span>.
        </h1>

        {/* Presentación breve de la empresa */}
        <p className="inicio-texto">
          INCOIN es una empresa colombiana dedicada a la consultoría, interventoría y construcción
          de proyectos de ingeniería e infraestructura. Desarrollamos soluciones integrales con
          enfoque técnico, calidad, cumplimiento y compromiso con nuestros clientes.
        </p>

        {/* Botones: llevan a las secciones Servicios y Contacto */}
        <div className="inicio-botones">
          <a href="#servicios" className="boton boton-principal">
            Conoce nuestros servicios
            <Icono nombre="flecha" tamano={20} />
          </a>
          <a href="#contacto" className="boton boton-secundario">
            Solicita una cotización
          </a>
        </div>

        {/* Datos rápidos para dar confianza */}
        <div className="inicio-datos">
          <div className="dato">
            <strong>Consultoría</strong>
            <span>Estudios y diseños</span>
          </div>
          <div className="dato">
            <strong>Construcción</strong>
            <span>Obras civiles</span>
          </div>
          <div className="dato">
            <strong>Interventoría</strong>
            <span>Supervisión técnica</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio
