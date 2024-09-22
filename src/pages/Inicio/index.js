
import "./style.css";
import logo from '../../assets/68L_Valéria Spegel Rickli_Prancheta 1 cópia.png';
import frase from '../../assets/efeito-sanfona.png';

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
        
          <div className="flex container">
            <div className="produto prod1">
              <div className="sobre-produto1">
                <p className="t1">Como Eliminar o Efeito Sanfona no Emagrecimento</p>
                <p className="t2">Entenda que é possível não comer suas emoções. Essa culpa não é sua!</p>
              </div>
              <div className="sobre-produto">
                <p className="t2">R$ 27,90</p>
                <a className="link" href="https://valeriarickli.orbitpages.online/como-eliminar-o-efeito-sanfona-no-emagrecimento-2?fbclid=PAZXh0bgNhZW0CMTEAAabIILzpnh65rm8pz0efQxbpy9HQih9oFD1EzANLsNh8LacnweqqTnVkw6g_aem_mGJTFQNp0nzcLzObeGIAaw">Saiba mais! <i class="bi bi-arrow-right-short"></i></a>
              </div>
            </div>
            <div className="produto prod2">
            <div className="sobre-produto1">
                <p className="t1">Como Sair do Efeito Sanfona e Nunca Mais Voltar</p>
                <p className="t2">Em uma mentoria de apenas 6 meses</p>
              </div>
              <div className="sobre-produto">
                <p className="t2">R$ 4997,00</p>
                <a className="link" href="#">Saiba mais! <i class="bi bi-arrow-right-short"></i></a>
              </div>
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