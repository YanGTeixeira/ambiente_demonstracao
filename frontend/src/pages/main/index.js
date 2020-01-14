import React, { useState } from 'react';
import './main.css';
import logo from '../../img/logo.svg';
import v2d from '../../img/v2d.svg';
import blackbox from '../../img/blackbox.svg';
import lp_vendas from '../../img/lp_vendas.svg'
import barra_canais from '../../img/barra_canais.svg'
import vendas_negociador from '../../img/vendas_negociador_faq.svg'
import boleto from '../../img/boleto.svg'
import atestado from '../../img/atestados.svg'
import omega from '../../img/omega3.svg'
import beon from '../../img/beon.svg'
import agente_virtual from '../../img/agente_virtual.svg'
import faq from '../../img/vendas_negociador_faq.svg'
import personalizado from '../../img/personalizado.svg'
import { Link } from 'react-router-dom'

//Modal
import ModalLp from './component/modal/lpvendas/index';
import ModalV2d from './component/modal/v2d/index';
import ModalOmega from './component/modal/omega/index';



const Main = () => {

  const [isBarra, setIsBarra] = React.useState(true);
  const [icon, setIcon] = useState('reoder');
  const [openModalLp, setOpenModalLp] = React.useState(false);
  const [openModalV2d, setOpenModalV2d] = React.useState(false);
  const [openModalOmega, setOpenModalOmega] = React.useState(false);

  const handleOpenLp = () => {
    setOpenModalLp(true);
  }
  const handleCloseLp = () => {
    setOpenModalLp(false);
  }

  const handleOpenV2d = () => {
    setOpenModalV2d(true);
  }
  const handleCloseV2d = () => {
    setOpenModalV2d(false);
  }

  const handleOpenOmega = () => {
    setOpenModalOmega(true);
  }
  const handleCloseOmega = () => {
    setOpenModalOmega(false);
  }

  const openBarra = () => {
    setIsBarra(!isBarra);
    if (isBarra === true) {
      setIcon("clear")
    } else {
      setIcon("reorder")

    }
  }
  return (
    <div className="App">

      <ModalLp openModalLp={openModalLp} handleCloseLp={handleCloseLp} />
      <ModalV2d openModalV2d={openModalV2d} handleCloseV2d={handleCloseV2d} />
      <ModalOmega openModalOmega={openModalOmega} handleCloseOmega={handleCloseOmega} />

      <div onClick={openBarra}>
        <i className="material-icons icon-barra">
          {icon}
        </i>
      </div>

      {!isBarra &&
        <div className="barra">
          <div className="disp">
            <div className="img-txt">
              <img src={personalizado} alt="Personalizado" />
              <p className="personalizado">Criar Personalizado</p>
            </div>
            <p className="descricao">Voice to Digital</p>
            <Link to='/edit2vd'>
              <p className="descricao">LP de Vendas</p>
            </Link>
          </div>
        </div>
      }
      {
      window.innerWidth > 320 ?
      (
        <div className="container">


          <div className="item-a">
            <img src={logo} className="rounded mx-auto d-block logo" alt="Logo Flex" />
          </div>


          <div className="l-1">
            <div className="center" onClick={handleOpenV2d}>
              <div className="item">
                <img src={v2d} className="rounded mx-auto d-block imgItem" alt="V2D" />
              </div>
              <span className="text ajust-widt-vd i5">Voice to Digital</span>
            </div>
            <Link to="/blackbox">
              <div className="center">
                <div className="item">
                  {/* <a href="./produtos/blackbox/index.html"> */}
                  <img src={blackbox} className="rounded mx-auto d-block imgItem" alt="BlackBox" />
                  {/* </a> */}
                </div>
                <span className="text ">BlackBox</span>
              </div>
            </Link>
            {/* <Link to="/vendas"> */}
            <div className="center" onClick={handleOpenLp}>
              <div className="item">
                <img src={lp_vendas} className="rounded mx-auto d-block imgItem" alt="LP de Vendas" />
              </div>
              <span className="text i5">LP de Vendas</span>
            </div>
            {/* </Link> */}
            <Link to="/xbar">
              <div className="center">
                <div className="item">
                  {/* <a href="#"> */}
                  <img src={barra_canais} className="rounded mx-auto d-block imgItem" alt="Canais" />
                  {/* </a> */}
                </div>
                <span className="text ajust-widt-bc">Barra de Canais</span>
              </div>
            </Link>
          </div>

          <div className="l-1">
            <div className="center">
              <div className="item">
                {/* <a href="#"> */}
                <img src={vendas_negociador} className="rounded mx-auto d-block imgItemWithText"
                  alt="Vendas" />
                <span className="subtitle">Vendas</span>
                {/* </a> */}
              </div>
              <span className="text">Chatbot de Vendas</span>
            </div>

            <div className="center">
              <div className="item">
                {/* <a href="#"> */}
                <img src={vendas_negociador} className="rounded mx-auto d-block imgItemWithText"
                  alt="Negociador" />
                <span className="subtitle">Negociador</span>
                {/* </a> */}
              </div>
              <span className="text">Chatbot Negociador</span>
            </div>

            <div className="center">
              <div className="item">
                {/* <a href="./produtos/boleto/home.html" data-toggle="modal" data-target="#exampleModalCenter"> */}
                <img src={boleto} className="rounded mx-auto d-block imgItem" alt="Boleto Digital" />
                {/* </a> */}
              </div>
              <span className="text i5">Boleto Digital</span>
            </div>

            <div className="center">
              <div className="item">
                {/* <a href="#"> */}
                <img src={atestado} className="rounded mx-auto d-block imgItem" alt="Atestados" />
                {/* </a> */}
              </div>
              <span className="text">Atestados</span>
            </div>
          </div>
          <div className="l-1">
            <div className="center" onClick={handleOpenOmega}>
              <div className="item">
                {/* <a href="#"> */}
                <img src={omega} className="rounded mx-auto d-block imgItem" alt="Ômega 3" />
                {/* </a> */}
              </div>
              <span className="text">Ômega 3</span>
            </div>
            {/* <a href="https://loja.imaginarium.com.br/?beon-prototype=on"> */}
            <div className="center">
              <div className="item">
                <img src={beon} className="rounded mx-auto d-block imgItem" alt="BeON" />
              </div>
              <span className="text">BeOn</span>
            </div>
            {/* </a> */}
            <Link to="/agente">
              <div className="center">
                <div className="item">
                  {/* <a href="./produtos/agentevirtuais/index.html"> */}
                  <img src={agente_virtual} className="rounded mx-auto d-block imgItem"
                    alt="Agentes Virtuais" />
                  {/* </a> */}
                </div>
                <span className="text ajust-widt-av i5-av">Agentes Virtuais</span>
              </div>
            </Link>
            <div className="center">
              <div className="item">
                {/* <a href="#"> */}
                <img src={faq} className="rounded mx-auto d-block imgItem"
                  alt="FAQ" />
                {/* </a> */}
              </div>
              <span className="text i5">Chatbot FAQ</span>
            </div>

          </div>
        </div>
      )
      :
      (
        <div className="container">
          <div className="item-a">
            <img src={logo} className="rounded mx-auto d-block logo" alt="Logo Flex" />
          </div>
          <div className="l-1">
            <div className="center" onClick={handleOpenV2d}>
              <div className="item">
                <img src={v2d} className="rounded mx-auto d-block imgItem" alt="V2D" />
              </div>
              <span className="text ajust-widt-vd i5">Voice to Digital</span>
            </div>
            <Link to="/blackbox">
              <div className="center">
                <div className="item">
                  {/* <a href="./produtos/blackbox/index.html"> */}
                  <img src={blackbox} className="rounded mx-auto d-block imgItem" alt="BlackBox" />
                  {/* </a> */}
                </div>
                <span className="text ">BlackBox</span>
              </div>
            </Link>
            {/* <Link to="/vendas"> */}
            <div className="center" onClick={handleOpenLp}>
              <div className="item">
                <img src={lp_vendas} className="rounded mx-auto d-block imgItem" alt="LP de Vendas" />
              </div>
              <span className="text i5">LP de Vendas</span>
            </div>
            {/* </Link> */}
          </div>

          <div className="l-1">
          <Link to="/xbar">
              <div className="center">
                <div className="item">
                  {/* <a href="#"> */}
                  <img src={barra_canais} className="rounded mx-auto d-block imgItem" alt="Canais" />
                  {/* </a> */}
                </div>
                <span className="text ajust-widt-bc">Barra de Canais</span>
              </div>
            </Link>
            <div className="center">
              <div className="item">
                {/* <a href="#"> */}
                <img src={vendas_negociador} className="rounded mx-auto d-block imgItemWithText"
                  alt="Vendas" />
                <span className="subtitle">Vendas</span>
                {/* </a> */}
              </div>
              <span className="text">Chatbot de Vendas</span>
            </div>

            <div className="center">
              <div className="item">
                {/* <a href="#"> */}
                <img src={vendas_negociador} className="rounded mx-auto d-block imgItemWithText"
                  alt="Negociador" />
                <span className="subtitle">Negociador</span>
                {/* </a> */}
              </div>
              <span className="text">Chatbot Negociador</span>
            </div>
          </div>
          <div className="l-1">
          <div className="center">
              <div className="item">
                {/* <a href="./produtos/boleto/home.html" data-toggle="modal" data-target="#exampleModalCenter"> */}
                <img src={boleto} className="rounded mx-auto d-block imgItem" alt="Boleto Digital" />
                {/* </a> */}
              </div>
              <span className="text i5">Boleto Digital</span>
            </div>

            <div className="center">
              <div className="item">
                {/* <a href="#"> */}
                <img src={atestado} className="rounded mx-auto d-block imgItem" alt="Atestados" />
                {/* </a> */}
              </div>
              <span className="text">Atestados</span>
            </div>
            <div className="center" onClick={handleOpenOmega}>
              <div className="item">
                {/* <a href="#"> */}
                <img src={omega} className="rounded mx-auto d-block imgItem" alt="Ômega 3" />
                {/* </a> */}
              </div>
              <span className="text">Ômega 3</span>
            </div>
          </div>
          <div className="l-1">
          {/* <a href="https://loja.imaginarium.com.br/?beon-prototype=on"> */}
          <div className="center">
              <div className="item">
                <img src={beon} className="rounded mx-auto d-block imgItem" alt="BeON" />
              </div>
              <span className="text">BeOn</span>
            </div>
            {/* </a> */}
            <Link to="/agente">
              <div className="center">
                <div className="item">
                  {/* <a href="./produtos/agentevirtuais/index.html"> */}
                  <img src={agente_virtual} className="rounded mx-auto d-block imgItem"
                    alt="Agentes Virtuais" />
                  {/* </a> */}
                </div>
                <span className="text ajust-widt-av i5-av">Agentes Virtuais</span>
              </div>
            </Link>
            <div className="center">
              <div className="item">
                {/* <a href="#"> */}
                <img src={faq} className="rounded mx-auto d-block imgItem"
                  alt="FAQ" />
                {/* </a> */}
              </div>
              <span className="text i5">Chatbot FAQ</span>
            </div>
          </div>
        </div>
      )
    }
    </div>
  );
}

export default Main;
