import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Run from './Run.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Run />
  </StrictMode>,
)
