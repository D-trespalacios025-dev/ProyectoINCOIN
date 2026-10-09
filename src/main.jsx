// Este archivo es el punto de entrada del proyecto.
// Su trabajo es tomar el componente App y "pintarlo" dentro del div id="root" del index.html

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Estilos globales (colores, botones, etc.)
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
