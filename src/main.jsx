import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='h-48 w-4/5 ml-16'>

    <Home/>
    </div>
  </StrictMode>,
)
