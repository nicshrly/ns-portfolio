import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "@fontsource/press-start-2p"
import "@fontsource/montserrat"
import "nes.css/css/nes.min.css"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
