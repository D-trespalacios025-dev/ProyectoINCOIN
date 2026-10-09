/* =========================================================
   COMPONENTE PRINCIPAL DE LA PÁGINA (App)

   Aquí se "arma" el sitio web completo: se importa cada sección
   (que está en su propio archivo dentro de la carpeta componentes)
   y se colocan una debajo de otra en el orden que se ve en la web.

   Cada sección tiene un id (inicio, nosotros, servicios, ...) que
   está definido dentro de su propio archivo y sirve para que el
   menú del navbar pueda desplazarse hasta ella.
   ========================================================= */

import Navbar from './componentes/Navbar'
import Inicio from './componentes/Inicio'
import Nosotros from './componentes/Nosotros'
import Servicios from './componentes/Servicios'
import Proyectos from './componentes/Proyectos'
import Proceso from './componentes/Proceso'
import Sectores from './componentes/Sectores'
import PorQueElegirnos from './componentes/PorQueElegirnos'
import Contacto from './componentes/Contacto'
import Footer from './componentes/Footer'
import BotonWhatsApp from './componentes/BotonWhatsApp'

function App() {
  return (
    <>
      {/* Barra de navegación fija en la parte superior */}
      <Navbar />

      {/* Contenido principal de la página, sección por sección */}
      <main>
        <Inicio />          {/* 1. Inicio */}
        <Nosotros />        {/* 2. Nosotros */}
        <Servicios />       {/* 3. Servicios */}
        <Proyectos />       {/* 4. Proyectos */}
        <Proceso />         {/* 5. Nuestro proceso */}
        <Sectores />        {/* 6. Sectores */}
        <PorQueElegirnos /> {/* 7. ¿Por qué elegirnos? */}
        <Contacto />        {/* 8. Contacto */}
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Botón flotante de WhatsApp (siempre visible en la esquina) */}
      <BotonWhatsApp />
    </>
  )
}

export default App
