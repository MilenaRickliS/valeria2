
import "./style.css";
import logo from '../../assets/68L_Valéria Spegel Rickli_Prancheta 1 cópia.png';
import frase from '../../assets/Como sair do efeito sanfona e nunca mais voltar (1).png';

function Inicio() {



  return (
    
      <div>
        
       <nav className="menu">
          <ul>
            <li><a href="#">Loja</a></li>
            <li><a href="/sobre">Sobre mim</a></li>
          </ul>
          <img className="logo" src={logo}/>
       </nav>
        
       <div>
        <div className="titulo">
          <h1>Bem-vindo(a)!</h1>
          <h2>Você está um passo da sua compra!</h2>
        </div>
        
          <div className="flex">
            <div className="produto">

            </div>
            <div className="produto">
              
            </div>
          </div>
          
          
       </div>
       <div className="flex">
        <img  className="frase" src={frase}/>
       </div>
       
     

      
      </div>

  );
}

export default Inicio;