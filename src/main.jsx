import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div className='border-lime-400 border-solid h-48 w-96'>

    </div> */}
    <Home/>
  </StrictMode>,
)
