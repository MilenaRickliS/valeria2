
import "./style.css";
import logo from '../../assets/68L_Valéria Spegel Rickli_Prancheta 1 cópia.png';
import frase from '../../assets/efeito-sanfona.png';

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
        <div className="titulo">
          <h1>Bem-vindo(a)!</h1>
          <h2>Você está um passo da sua compra!</h2>
        </div>
        
         
          
          
       </div>
       <div className="flex">
        <img  className="frase" src={frase}/>
       </div>
       
     

      
      </div>

  );
}

export default Sobre;