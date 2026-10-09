/* =========================================================
   IMÁGENES DE LA PÁGINA
   Todas las fotos están reunidas en este archivo para que sea
   MUY fácil reemplazarlas por fotografías reales de INCOIN.

   ¿Cómo poner una foto propia?
   1. Guarda la foto dentro de la carpeta  src/assets/  (ej: obra1.jpg)
   2. Arriba de este archivo escribe:   import obra1 from '../assets/obra1.jpg'
   3. Reemplaza la dirección de internet por la variable:   hero: obra1,

   Mientras tanto se usan fotos libres de la web (Unsplash) como referencia.
   ========================================================= */
   import fondo_principal from '../assets/imagenes/hero.jpg'
   import foto_nosotros from '../assets/imagenes/nosotros.jpg'
   import Proyecto_2 from '../assets/imagenes/mejoramiento_vial.jpg'
   import Proyecto from '../assets/imagenes/cementerio_ovejas.jpg'
   import Proyecto_9 from '../assets/imagenes/Consultoria.jpg'
   import Proyecto_3 from '../assets/imagenes/Obra_de_mantenimiento.jpg'
   import Proyecto_4 from '../assets/imagenes/interventoria_sabanagrande (2).jpg'
   import Proyecto_5 from '../assets/imagenes/Proyecto_berrecil.jpg'
   import Proyecto_6 from '../assets/imagenes/Estudio_suelos.jpg'
   import Proyecto_7 from '../assets/imagenes/Registraduria_sabanagrande.jpg'
   import Proyecto_8 from '../assets/imagenes/INVIMA.jpg'  
   import Proyecto_10 from '../assets/imagenes/viviend_horizontal.jpg' 
   import Proyecto_11 from '../assets/imagenes/privado.jpg' 
   import Proyecto_12 from '../assets/imagenes/Alcantarillado.jpg' 
   
export const imagenes = {
  // Foto grande de la sección Inicio (obra en construcción vista desde arriba)
  hero: fondo_principal,

  // Foto de la sección Nosotros (ingeniero revisando planos)
  nosotros: foto_nosotros,

  // Fotos usadas en las tarjetas de Proyectos y en la Galería
  proyecto1: Proyecto_2,
  proyecto2: Proyecto,
  proyecto3: Proyecto_3,
  proyecto4: Proyecto_4,
  proyecto5: Proyecto_5,
  proyecto6: Proyecto_6,
  proyecto7: Proyecto_7,
  proyecto8: Proyecto_8,
  proyecto9: Proyecto_9,
  proyecto12: Proyecto_12,
  
  // Fotos de la sección Sectores
  residencial: Proyecto_10,
   residencialV: Proyecto_3,
  institucional: Proyecto_11,
  publico: Proyecto_8,
  vial: Proyecto_2,
}
