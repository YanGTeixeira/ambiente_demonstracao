import React from 'react';
import { Link } from 'react-router-dom'
import Voltar from './imgs/voltar.svg'
import './css/xbar.css'
import xbar from './imgs/xbar.svg'

// useEffect(
//     // canaisDigitais('widget-canais-digitais', '189786ed-7630-4edc-aefa-88d7c807fe4f')
// );

function Xbar() {
    return (
        <div>


            <div id="widget-canais-digitais" onclick="oculta()"></div>

            <div className="header-xbar">

                <Link to="/" alt="Voltar">
                    <div className="back-v2d" style={{ marginTop: 20, marginLeft: 20 }}>
                        <span><img src={Voltar} alt="Voltar" style={{ marginTop: 3, marginRight: 3 }} /></span>
                        <span className="textBack">Voltar ao PAD</span>
                    </div>
                </Link>
                <img src={xbar} className="img-xbar" alt="xbar" />
                <div className="info-xbar">
                    {/* <a className="txt-header" href="#" ></a> */}
                    {/* <a className="txt-header" href="#">QUEM SOMOS</a> */}
                    {/* <a className="txt-header" href="#">CONTATO</a> */}
                    {/* <a className="txt-header" href="#" style={{ color: "#FDB913" }}>NEWS</a> */}
                </div>
            </div>
            <div className="xbar">
                <div className="info-black-demo">
                    <div className="text-info-black">
                        ESTA É MAIS UMA LINDA PÁGINA DE <span className="demostracao-txt"><b>DEMONSTRAÇÃO</b></span>
                        <div className="line-yellow"></div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="text-interagindo">
                    Bem-vindo! Esta página demonstra nossa solução de barra de contatos, experimente clicando no canto inferior
                    direito da tela, e interagindo

                <p className="confira"><b>CONFIRA!</b></p>
                </div>
            </div>

        </div>
    )

}

export default Xbar;
