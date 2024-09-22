
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
          <div className="div-sobre">
            <p className="sobre-mim">Valéria Spegel Rickli é uma empreendedora, palestrante e instrutora de academia. Possui mais de 10 anos de experiência na área. 
            Publicou o Livro "Como Eliminar o efeito Sanfona no Emagrecimento", <a href="https://valeriarickli.orbitpages.online/como-eliminar-o-efeito-sanfona-no-emagrecimento-2?fbclid=PAZXh0bgNhZW0CMTEAAabIILzpnh65rm8pz0efQxbpy9HQih9oFD1EzANLsNh8LacnweqqTnVkw6g_aem_mGJTFQNp0nzcLzObeGIAaw">confira aqui!</a> Descobriu o porque de muitas pessoas 
            entrarem em um looping, de emagrecer e engordar, e nunca chegar ao que espera! Por isso, decidiu compartilhar sua experiência e conhecimento, a guiar mais pessoas a uma vida mais saudável (mentoria e saúde).</p>
  
          </div>
          
          <div className="contato">
            <a href=""><i class="bi bi-whatsapp"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-envelope-at-fill"></i></a>
            <a href="https://www.youtube.com/@studiovaleriarickli3802"><i class="bi bi-youtube"></i></a>
          </div>
          
       </div>
       <div className="footer">
       <div className="footer-nome">
          
          <p>Valéria Spegel Rickli</p>
          <p><i class="bi bi-c-circle"></i>Todos os Direitos Reservados</p><br></br>
          
        </div>
        <div className="footer-contato">
          <p>Dúvidas ou quer falar comigo?</p>
          <p>Acima está meu Email e WhatsApp, entre em contato! </p><br></br>
          
        </div> 

       </div>   
      
      </div>

  );
}

export default Sobre;