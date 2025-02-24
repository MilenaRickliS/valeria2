
import "./style.css";
import logo from '../../assets/68L_Valéria Spegel Rickli_Prancheta 1 cópia.png';
import livro from '../../assets/livro.jpg';


function Pagamento() {

  return (
    
      <div>

        <div class="pag">
          <div className="inicio-pag">
            <img class="logo" src={logo}/>
            <div>
              <h3>Titulo</h3>
              <p>Autor: Valéria Spegel Rickli</p>
              <p>preço</p>
              <p>parcelamento</p>
            </div>
          </div>

          <form>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required placeholder="Digite seu email"/>
            </div>
            <div>
              <label htmlFor="confirmEmail">Confirmação de Email:</label>
              <input type="email" id="confirmEmail" name="confirmEmail" required placeholder="Digite novamente seu email"/>
            </div>
            <div>
              <label htmlFor="nomeCompleto">Nome Completo:</label>
              <input type="text" id="nomeCompleto" name="nomeCompleto" required placeholder="Digite seu nome completo" />
            </div>
            <div>
              <label htmlFor="cpfCnpj">CPF ou CNPJ:</label>
              <input type="text" id="cpfCnpj" name="cpfCnpj" required placeholder="Digite o número do seu CPF ou CNPJ" />
            </div>
            <div>
              <label htmlFor="celular">Celular:</label>
              <input type="tel" id="celular" name="celular" required placeholder="(11) 99913-3455"/>
            </div>
            <div>
              <label htmlFor="formaPagamento">Forma de Pagamento:</label>
              <select id="formaPagamento" name="formaPagamento" required>
                <option value="cartaoCredito">Cartão de Crédito</option>
                <option value="pix">Pix</option>
                <option value="boleto">Boleto</option>
                <option value="transferencia">Transferência</option>
              </select>
            </div>

            <div>
              <div className="inf-pag">
                <h3><i class="bi bi-clock"></i> Aprovação imediata</h3>
                <p>O pagamento com pix leva um pouco de tempo para ser processado</p>
              </div>
              <div className="inf-pag">
                <h3><i class="bi bi-shield-check"></i> Transação segura</h3>
                <p>O formulário garante a proteção dos seus dados</p>
              </div> 
              <div className="inf-pag">
                <h3><i class="bi bi-qr-code"></i> Finalize sua compra com facilidade</h3>
                <p>É só acessar a área Pix no aplicativo do seu banco e escanear o QR code ou digitar o código</p>
              </div>   
            </div> 
            <div className="inf-pag">
              <h3>Aproveite e compre junto:</h3>

              <div>
                <img src={livro}/>
                <div>
                  <h4>Como Eliminar o Efeito Sanfona no Emagrecimento</h4>
                  <p>Meu nome é Valéria Spegel Rickli e fiquei anos e anos sofrendo com o efeito sanfona. Cansei de entrar em dietas malucas e outras até muito interessantes, mas que parecia que eu estava  enxugando gelo. Você não irá conseguir sair do efeito sanfona se não descobrir a raiz do problema e a cada dieta nova que não conseguir manter vai se frustrar mais e mais. Cada vez que me frustrava eu comia mais do que meu corpo precisava. Fui atleta na infância e adolescência o que me ajudou a manter o peso corporal durante muito tempo. Depois dos 40 anos resolvi parar de engordar e emagrecer e isso se tornou mais difícil do que eu imaginava. Resolvi não desistir até resolver esse problema e já a dois anos não tenho recorrência de compulsão alimentar e estou conseguindo manter o peso sem restringir a alimentação. Venha conhecer o que mudou na minha vida e mude a sua também.</p>
                  <p>R$ 27,90</p>
                  <button className="botao-final">Adicionar produto</button>  
                </div>  
              </div> 
            </div>

            <h3>Detalhes da compra</h3>
            
            <div>
              <p>Produto</p>
              <p>Preço</p>
            </div> 

            <button type="submit" className="botao-final">Finalizar Compra</button>
          </form>     
        
        </div>   

        <div>
          <div className="inf-final">
            <i class="bi bi-file-lock2"></i>
            <div>
              <p>Privacidade</p>
              <p>Sua informação 100% segura</p>
            </div>
          </div> 
          <div className="inf-final">
            <i class="bi bi-shield-check"></i>
            <div>
              <p>Compra Segura</p>
              <p>Ambiente seguro e autenticado</p>
            </div>
          </div> 
          <div className="inf-final">
            <i class="bi bi-clipboard2-check"></i>
            <div>
              <p>Conteúdo aprovado</p>
              <p>100% revisado e aprovado</p>
            </div>
          </div>           
        </div>   
      </div>

  );
}

export default Pagamento;