import { Routes, Route } from 'react-router-dom'

import Inicio from '../pages/Inicio';
import Sobre from '../pages/Sobre';
import Loja from '../pages/Loja';
import Pagamento from '../pages/Pagamento';



function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={<Inicio/>}/>

      <Route path="/sobre" element={ <Sobre/> } />

      <Route path="/Loja" element={<Loja/>}/>

      <Route path="/Pagamento" element={<Pagamento/>}/>

    
    </Routes>
  )
}

export default RoutesApp;