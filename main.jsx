import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Tienda from './Tienda'
import Personas from './Personas'
import Dragones from './Dragones'
import Poke from './Poke'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Tienda/>
    <Personas/>
    <Dragones/>
    <Poke/>
    {/* <VideoJuegos/> */}
 
  </>
)
