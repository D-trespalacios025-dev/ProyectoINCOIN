/* =========================================================
   CONTENIDO DE LA PÁGINA (TEXTOS)
   Aquí están todas las listas de información que se muestran en la web.
   La idea es separar el CONTENIDO del DISEÑO: si hay que corregir un texto,
   agregar un servicio o un proyecto nuevo, solo se edita este archivo
   y la página se actualiza sola.
   ========================================================= */

import { imagenes } from './imagenes'

/* ---------- DATOS DE CONTACTO DE LA EMPRESA ----------
   Se usan en el navbar, en contacto y en el pie de página. */
export const empresa = {
  nombre: 'INCOIN',
  eslogan: 'Ingeniería y Construcción Integral',
  telefono: '310 818 3363',
  whatsapp: '573108183363', // Formato internacional, sin signos, para el enlace de WhatsApp
  whatsappTexto: '310 818 3363',
  correo: 'incoin2026@gmail.com',
  ubicacion: 'La jagua de Ibirico, Cesar',
  instagram: '@incoinconst',
  instagramUrl: 'https://www.instagram.com/incoinconst',
}

/* ---------- MENÚ DE NAVEGACIÓN ----------
   "id" debe coincidir con el id de cada <section> del archivo App.jsx,
   así el navegador sabe a dónde desplazarse al hacer clic. */
export const enlacesMenu = [
  { id: 'inicio', nombre: 'Inicio' },
  { id: 'nosotros', nombre: 'Nosotros' },
  { id: 'servicios', nombre: 'Servicios' },
  { id: 'proyectos', nombre: 'Proyectos' },
  { id: 'proceso', nombre: 'Nuestro proceso' },
  { id: 'sectores', nombre: 'Sectores' },
  { id: 'elegirnos', nombre: '¿Por qué elegirnos?' },
  { id: 'contacto', nombre: 'Contacto' },
]

/* ---------- VALORES CORPORATIVOS (sección Nosotros) ---------- */
export const valores = [
  { icono: 'apreton', nombre: 'Compromiso' },
  { icono: 'estrella', nombre: 'Calidad' },
  { icono: 'escudo', nombre: 'Responsabilidad' },
  { icono: 'ojo', nombre: 'Transparencia' },
  { icono: 'equipo', nombre: 'Trabajo en equipo' },
  { icono: 'bombillo', nombre: 'Innovación' },
]

/* ---------- SERVICIOS ---------- */
export const servicios = [
  {
    icono: 'topografia',
    titulo: 'CONSULTORÍA',
    descripcion:
      'Estudios técnicos y diseños de ingeniería que dan soporte a la toma de decisiones del proyecto.',
    items: ['Topografía', 'Estudios de suelos', 'Pavimentos', 'Diseño vial'],
  },
  {
    icono: 'construccion',
    titulo: 'CONSTRUCCIÓN',
    descripcion:
      'Ejecución de obras con criterios de calidad, seguridad y cumplimiento de los tiempos pactados.',
    items: ['Obras civiles', 'Infraestructura', 'Adecuaciones'],
  },
  {
    icono: 'supervision',
    titulo: 'SUPERVISIÓN',
    descripcion:
      'Acompañamiento técnico y administrativo para verificar que la obra cumpla lo contratado.',
    items: ['Interventoría', 'Supervisión', 'Control de proyectos'],
  },
  {
    icono: 'gerencia',
    titulo: 'GERENCIA',
    descripcion:
      'Dirección integral del proyecto: organizamos recursos, tiempos y equipos de trabajo.',
    items: ['Planeación', 'Coordinación', 'Seguimiento'],
  },
]

/* ---------- PROYECTOS ----------
   "estado" sirve para separarlos en dos grupos: 'ejecutado' o 'en-ejecucion'.
   Los datos son de ejemplo: se deben reemplazar por proyectos reales. */
export const proyectos = [
  {
    nombre: 'MEJORAMIENTO VIAL',
    tipo: 'Infraestructura vial',
    ubicacion: 'La jagua de Ibirico, Cesar',
    descripcion:
      'Mejoramiento de vía en afirmado existente, mediante adecuación y nivelación de la superficie para optimizar la circulación.',
    imagen: imagenes.proyecto1,
    estado: 'ejecutado',
  },
  {
    nombre: 'ADECUACIÓN EXTERIOR',
    tipo: 'Urbanismo',
    ubicacion: 'Ovejas, Sucre',
    descripcion:
      'Adecuación y mejoramiento de fachada y zonas verdes del campo santo, mediante trabajos de embellecimiento y recuperación de áreas exteriores.',
    imagen: imagenes.proyecto2,
    estado: 'ejecutado',
  },
  {
    nombre: 'CONSULTORIA Y DISEÑO',
    tipo: 'Consultoria',
    ubicacion: 'Berrecil, Cesar',
    descripcion:
      'Prestación de servicios de consultoría para la planificación, evaluación y desarrollo de proyectos de ingeniería.',
    imagen: imagenes.proyecto9,
    estado: 'ejecutado',
  },
    {
    nombre: 'REMODELACIÓN DE VIVIENDAS',
    tipo: 'Remodelación',
    ubicacion: 'Sincelejo, Sucre',
    descripcion:
      'Ejecución de actividades de mantenimiento preventivo y correctivo para conservar y mejorar las condiciones de las viviendas..',
    imagen: imagenes.proyecto3,
    estado: 'ejecutado',
  },
   {
    nombre: 'MANTENIMIENTO Y ADECUACIÓN',
    tipo: 'Mantenimiento',
    ubicacion: 'Cartagena de Indias, Bolivar',
    descripcion:
      'Mantenimiento y adecuación de la sede del INVIMA en Bolívar, mediante intervención de infraestructura y mejoramiento de sus espacios.',
    imagen: imagenes.proyecto8,
    estado: 'ejecutado',
  },
  {
    nombre: 'ESTUDIOS Y ENSAYOS',
    tipo: 'Caracterización',
    ubicacion: 'La jagua de Ibirico, Cesar',
    descripcion:
      'Estudios de suelos, topografía y diseño de la estructura de pavimento para un corredor vial.',
    imagen: imagenes.proyecto6,
    estado: 'ejecutado',
  },
  {
    nombre: 'ALCANTARILLADO',
    tipo: 'Drenaje',
    ubicacion: 'La jagua de Ibirico, Cesar',
    descripcion:
      'Construcción y adecuación del sistema de alcantarillado para la vía, garantizando la correcta evacuación de aguas.',
    imagen: imagenes.proyecto12,
    estado: 'ejecutado',
  },
  {
    nombre: 'INTERVENTORÍA DE OBRA',
    tipo: 'Interventoría',
    ubicacion: 'Sabanagrande, Atlántico',
    descripcion:
      'Interventoría y seguimiento técnico a las obras de adecuación y mantenimiento de la Registraduría de Sabanagrande.',
    imagen: imagenes.proyecto4,
    estado: 'en-ejecucion',
  },
  {
    nombre: 'CONSTRUCCIÓN',
    tipo: 'Obras civiles',
    ubicacion: 'Becerril, Cesar',
    descripcion:
      'Construcción de malecón urbano para mejorar el espacio público, la movilidad peatonal y el aprovechamiento del entorno.',
    imagen: imagenes.proyecto5,
    estado: 'en-ejecucion',
  },
]

/* ---------- GALERÍA DE FOTOGRAFÍAS (sección Proyectos) ---------- */
export const galeria = [
  { imagen: imagenes.proyecto1, titulo: 'Mejoramiento vial' },
  { imagen: imagenes.proyecto2, titulo: 'Fachadas y zonas verdes' },
  { imagen: imagenes.proyecto3, titulo: 'Mantenimiento de viviendas' },
  { imagen: imagenes.proyecto5, titulo: 'Construcción' },
  { imagen: imagenes.proyecto7, titulo: 'Interventoria' },

]

/* ---------- NUESTRO PROCESO (6 pasos) ---------- */
export const pasosProceso = [
  {
    numero: '01',
    icono: 'chat',
    titulo: 'CONSULTA',
    descripcion: 'Conocemos las necesidades y objetivos del cliente.',
  },
  {
    numero: '02',
    icono: 'lupa',
    titulo: 'DIAGNÓSTICO',
    descripcion: 'Analizamos las condiciones técnicas y requerimientos del proyecto.',
  },
  {
    numero: '03',
    icono: 'regla',
    titulo: 'DISEÑO',
    descripcion: 'Desarrollamos estudios y soluciones de ingeniería.',
  },
  {
    numero: '04',
    icono: 'calendario',
    titulo: 'PLANEACIÓN',
    descripcion: 'Definimos alcance, recursos, costos, tiempos y metodología.',
  },
  {
    numero: '05',
    icono: 'grua',
    titulo: 'EJECUCIÓN',
    descripcion: 'Desarrollamos el proyecto bajo criterios de calidad, seguridad y cumplimiento.',
  },
  {
    numero: '06',
    icono: 'entrega',
    titulo: 'SUPERVISIÓN Y ENTREGA',
    descripcion: 'Verificamos resultados y acompañamos el cierre del proyecto.',
  },
]

/* ---------- SECTORES EN LOS QUE TRABAJAMOS ---------- */
export const sectores = [
  {
    icono: 'casa',
    nombre: 'Residencia horizontal',
    descripcion: 'Proyectos de construcción y adecuación.',
    imagen: imagenes.residencial,
  },
    {
    icono: 'edificio',
    nombre: 'Residencia vertical',
    descripcion: 'Proyectos de construcción y adecuación.',
    imagen: imagenes.residencialV,
  },
  {
    icono: 'institucional',
    nombre: 'Privado',
    descripcion: 'Proyectos destinados a entidades privadas.',
    imagen: imagenes.institucional,
  },
  {
    icono: 'publico',
    nombre: 'Público',
    descripcion: 'Proyectos de infraestructura y obra pública.',
    imagen: imagenes.publico,
  },
  {
    icono: 'carretera',
    nombre: 'Infraestructura vial',
    descripcion: 'Proyectos relacionados con vías, pavimentos y movilidad.',
    imagen: imagenes.vial,
  },
]

/* ---------- ¿POR QUÉ ELEGIRNOS? ---------- */
export const razones = [
  {
    icono: 'casco',
    titulo: 'Experiencia',
    descripcion:
      'Conocimiento técnico aplicado al desarrollo de proyectos de ingeniería y construcción.',
  },
  {
    icono: 'estrella',
    titulo: 'Calidad',
    descripcion:
      'Buscamos garantizar resultados que cumplan con los requerimientos técnicos establecidos.',
  },
  {
    icono: 'reloj',
    titulo: 'Cumplimiento',
    descripcion: 'Planeación y seguimiento orientados al cumplimiento de objetivos.',
  },
  {
    icono: 'escudo',
    titulo: 'Seguridad',
    descripcion: 'Priorizamos prácticas seguras durante el desarrollo de nuestros proyectos.',
  },
  {
    icono: 'engranaje',
    titulo: 'Soluciones integrales',
    descripcion:
      'Acompañamos al cliente desde la planificación hasta la ejecución y supervisión.',
  },
  {
    icono: 'ojo',
    titulo: 'Transparencia',
    descripcion: 'Comunicación clara y seguimiento permanente durante cada etapa.',
  },
]
