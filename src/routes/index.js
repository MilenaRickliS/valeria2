import { Routes, Route } from 'react-router-dom'

import Inicio from '../pages/Inicio';
import Pagamento from '../pages/Pagamento';


function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={<Inicio/>}/>

      <Route path="/Pagamento" element={<Pagamento/>}/>

    
    </Routes>
  )
}

export default RoutesApp;