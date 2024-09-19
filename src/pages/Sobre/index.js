
import "./style.css";
import logo from '../../assets/68L_Valéria Spegel Rickli_Prancheta 1 cópia.png';
import frase from '../../assets/efeito-sanfona.png';
import eu from '../../assets/IMG-20240730-WA0007-removebg.png';

function Sobre() {



  return (
    
      <div>
        
       <nav className="menu">
          <ul>
            <li><a href="/">Loja</a></li>
            <li><a href="#">Sobre mim</a></li>
          </ul>
          <img className="logo" src={logo}/>
       </nav>
        
       <div>
          <img className="img-eu" src={eu}/>
        
         
          
          
       </div>
       <div className="flex">
        <img  className="frase" src={frase}/>
       </div>
       
     

      
      </div>

  );
}

export default Sobre;