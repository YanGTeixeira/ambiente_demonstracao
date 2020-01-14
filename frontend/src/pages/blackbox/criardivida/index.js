import React, { useState } from 'react';
import './criardivida.css'
import { Link } from 'react-router-dom'
import Footer from '../img/logo-flex.svg'
import blackbox from '../img/logo.png'
import InputMask from 'react-input-mask';

import Voltar from '../img/voltar.svg';
import axios from 'axios';

// Modal
import ModalBlackbox from '../../main/component/modal/blackbox-registro/index';

const NewDivida = () => {

	const [naoPreenchido, setNaoPreenchido] = useState(true);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('')
    const [nome_cartao, setNomeCartao] = useState('')
    const [valor, setValor] = useState('')
    const [openModalBlackbox, setOpenModalBlackbox] = React.useState(false);
    
    const handleOpenBlackbox = () => {
        setOpenModalBlackbox(true);
    }
    const handleCloseBlackbox = () => {
        setOpenModalBlackbox(false);
    }

    const changeTelefone = (e) => {
        setTelefone(e.target.value);
    };
    const changeName = (e) => {
        setNome(e.target.value);
    };
    const changeNameCartao = (e) => {
        setNomeCartao(e.target.value);
    };

    const changeValor = (e) => {
        setValor(e.target.value);
        
    };

    const createDebt = async() => {
        if(nome === "" || telefone === "" || nome_cartao === "" || valor === "") {
            setNaoPreenchido(true);
            handleOpenBlackbox()
        }else{
            var valorTratado = valor.replace(',','');
            var valorFinal = valorTratado.replace('.','');
            
            const putAll = {
                    nome: nome,
                    telefone: telefone,
                    nome_cartao: nome_cartao,
                    valor: valorFinal
            }
            try {
                await axios.post('http://localhost:8000/api/v1/cadastrodivida',putAll)
                setNaoPreenchido(false);
                handleOpenBlackbox()
                console.log(putAll)
                setNome("");
                setNomeCartao("");
                setTelefone("");
                setValor("");
                
            } catch (err) {
                console.error(err)
            }
        }
    }
    return (
        <div>
            <div className="principal">
                <Link to="/" alt="Voltar">
                    <div className="back-v2d" style={{ marginTop: 20, marginLeft: 20 }}>
                        <span><img src={Voltar} alt="Voltar" style={{ marginRight: 15 }} /></span>
                        <span style={{ fontSize: 11 }}>Voltar ao PAD</span>
                    </div>
                </Link>
                <ModalBlackbox 
                    openModalBlackbox={openModalBlackbox} 
                    handleCloseBlackbox={handleCloseBlackbox}
                    naoPreenchido={naoPreenchido}
                />
                <div className="main-container">
                    <div className="form-box-criar">
                        <div className="box-logo-criar">
                            <img className="logo" src={blackbox} alt="logo" />
                        </div>
                        <div className="body-modal">
                            <input className="input-divida" placeholder="Nome" onChange={changeName} value={nome}/>
                            <InputMask
                                mask="(99)99999-9999"
                                maskChar=''
                                className="input-divida"
                                placeholder="Numero do celular"
                                value={telefone}
                                onChange={changeTelefone}
                            />
                            <input className="input-divida" placeholder="Nome conforme cartão" onChange={changeNameCartao} value={nome_cartao} />
                            <InputMask  
                                className="input-divida" 
                                placeholder="Valor da dívida" 
                                maxLength="8" 
                                value={valor} 
                                onChange={changeValor} 
                                maskChar=''
                            />
                            <div className="mani-button">
                                <div>
                                <Link to="/blackbox" alt="Voltar">
                                    <button className="button-voltar">voltar</button>
                                </Link>
                                </div>
                                <div>
                                    <button className="button-continuar" onClick={createDebt} >continuar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-flex">
                    <span className="footer-Text">Powered by </span>
                    <img src={Footer} alt="logo" />
                </div>
            </div>
        </div>
    );

}

export default NewDivida;