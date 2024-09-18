import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import valeria from '../../assets/IMG-20240730-WA0006.jpg';
import livro from '../../assets/Screenshot_20240610_204450_Instagram.jpg'
import sobre from '../../assets/sobre.png';

function Sobre() {
   return (
    
      <div>
        <div><Header/></div>
        <br/>
        <br/>
        <div className="inicio-sobre">
          <br/>
          
          <img src={sobre} alt="Valéria Rickli"/>
        </div>
        <h1>Sobre mim</h1>
        <div className="sobre-mim">
        <img src={valeria} alt="foto valéria" />
        <div>
          <h2>Sobre Valéria Spegel Rickli</h2>
          <p>nesses cursos você encontrará:</p>
          <div className="list">
            <i className="bi bi-check-circle-fill"></i>
            <p>um ponto positivo</p>
          </div>

        </div>
      </div>

        <div className="livro">
          <img src={livro} alt="foto livro"/>
          <div className="descr-livro">
          <strong>Sobre o meu trabalho</strong> <br/> <br/>
          <p>A escrita surgiu na antiguidade, antecedente ao texto e ao livro. A escrita consiste em um de código capaz de transmitir e conservar noções abstratas ou valores concretos, em suma, palavras. É importante destacar que o meio condiciona o signo, ou seja, a escrita foi em alguns momentos orientada por esse tipo de suporte; não é possível esculpir em papel ou escrever em mármore, por exemplo.</p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>

        <div>
          <h3>Interessado? Verifique meus cursos</h3>
          <div className="meuscursos">
            <p>Meus Cursos</p>
            <a href="/"><i className="bi bi-arrow-right"></i></a>
          </div>
          <br/>
          <br/>
        </div>
      <Footer/>
      </div>

  );
}

export default Sobre;