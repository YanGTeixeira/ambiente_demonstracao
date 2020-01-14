import React from 'react';
import './blackbox.css'
// import { Container } from './styles';
import Voltar from './img/voltar.svg'
import LogoBlack from './img/logo.png'
import Footer from './img/logo-flex.svg'
import { Link } from 'react-router-dom'

export default function blackbox() {
  return (
    <div className="principal">

      <Link to="/" alt="Voltar">
          <div className="back-v2d" style={{ marginTop: 20, marginLeft: 20 }}>
              <span><img src={Voltar} alt="Voltar" style={{ marginRight: 15 }} /></span>
              <span style={{ fontSize: 11 }}>Voltar ao PAD</span>
          </div>
      </Link>

      <div className="main-container">
        <div className="box-logo">
          <div className="container-logo-blackbox">
            <img className="logo-blackbox" src={LogoBlack} alt="logo"/>
          </div>
        </div>
        <div className="box-options">
        <Link to="/criardivida">
          <div className="box-option">
              <div className="text-option">
                registrar dívida
        </div>
          </div>
          </Link>
          <Link to="/listarDivida">
            <div className="box-option box-option-direita">
              {/* <a href="lista_dividas.html"> */}
                <div className="text-option">
                  histórico de pagamento
        </div>
              {/* </a> */}
            </div>
          </Link>
        </div>

      </div>
      <div className="footer-flex">
        <span className="footer-Text">Powered by </span>
        <img src={Footer} alt="logo" />
      </div>
    </div>
  );
}
