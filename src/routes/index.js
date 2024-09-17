import { Routes, Route } from 'react-router-dom'

import Inicio from '../pages/Inicio';
import Sobre from '../pages/Sobre';



function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={<Inicio/>}/>

      <Route path="/sobre" element={ <Sobre/> } />

    
    </Routes>
  )
}

export default RoutesApp;