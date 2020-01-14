import React, { useState } from 'react';
import Voltar from './imgs/voltar.svg'
import { Link } from 'react-router-dom'
import './edit.css'
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import Logo from './imgs/logo_edit.svg'
import { GithubPicker } from 'react-color'



function EditV2d() {

    const [imgFundo] = useState('grey');
    const [imgLogo] = useState('./imgs/logo_v2d.svg')
    const [openText, setOpenText] = React.useState(false);



    const [openColorPrimaria, setOpenColorPrimaria] = React.useState(false)
    const [colorPrimaria, setColorPrimaria] = useState('yellow');

    const [openColorSecundaria, setOpenColorSecundaria] = React.useState(false)
    const [colorSecundaria, setColorSecundaria] = useState('red');


    const [openColorPage, setOpenColorPage] = React.useState(false)
    const [colorPage, setColorPage] = useState('rgba(0, 0, 0, 0.5)');

    const handleClickText = () => {
        setOpenText(!openText);
    };

    const handleClickOpenColorPrimaria = () => {
        setOpenColorPrimaria(!openColorPrimaria);
    };

    const handleClickColorPrimaria = (color) => {
        setColorPrimaria(color.hex)
        setOpenColorPrimaria(!openColorPrimaria);
    }

    const handleClickOpenColorSecundaria = () => {
        setOpenColorSecundaria(!openColorSecundaria);
    };

    const handleClickColorSecundaria = (color) => {
        setColorSecundaria(color.hex)
        setOpenColorSecundaria(!openColorSecundaria);
    }

    const handleClickOpenColorPage = () => {
        setOpenColorPage(!openColorPage);
    };

    const handleClickColorPage = (color) => {
        setColorPage(color.hex)
        setOpenColorPage(!openColorPage);
    }
    return (
        <div>
            <Link to="/" alt="Voltar">
                <div className="back-v2d" style={{ marginTop: 20, marginLeft: 20 }}>
                    <span><img src={Voltar} alt="Voltar" style={{ marginTop: 3, marginRight: 3 }} /></span>
                    <span className="textBack">Voltar ao PAD</span>
                </div>
            </Link>
            <div className="mani-logo">
                <img src={Logo} alt="AAA" className="logo-edit-a" />
            </div>
            <div className="v2d">
                <div className="container-editv2d">
                    <div className="form-group">
                        <span className="titulo">Personalização</span>
                        <label for="campo_edicao" className="titulo_campo">Nome da Página</label>
                        <input className="form-control campo campo_edicao" type="text" id="campo_edicao" placeholder="V2D" />
                        <div className="upload-btn-wrapper">
                            <button type="file" className="btn" id="" onchange="trocaLogo.call(this)">Marca</button>
                            <input type="file" onchange="trocaLogo.call(this)" name="myfile" className="campo" />
                        </div>

                        <ListItem className="click-collapse" onClick={handleClickText}>
                            Clique para mudar de texto
                            {/* {openPrimaria ? 'a' : 'b'} */}
                        </ListItem>

                        <Collapse in={openText} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem >
                                    <div className="collapse" id="collapseExample">


                                        <div className="input-group ">
                                            <input className="form-control campo " id="title1" placeholder="Titulo 1" />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text campo">
                                                    <button type="button" onclick="editTitle1()" className="button-salvar-txt" />Salvar
                                        </span>
                                            </div>
                                        </div>

                                        <div className="input-group ">
                                            <input className="form-control campo " id="title2" placeholder="Titulo 2" />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text campo">
                                                    <button type="button" onclick="editTitle2()" className="button-salvar-txt" />Salvar
                                                </span>
                                            </div>
                                        </div>

                                        <div className="input-group ">
                                            <input className="form-control campo " id="descricao1" placeholder="Descrição 1" />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text campo">
                                                    <button type="button" onclick="editDescricao1()"
                                                        className="button-salvar-txt" />Salvar
                                                    </span>
                                            </div>
                                        </div>

                                        <div className="input-group">
                                            <input type="text" className="form-control campo " id="descricao2"
                                                placeholder="Descrição 2" />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text campo">
                                                    <button type="button" onclick="editDescricao2()"
                                                        className="button-salvar-txt" />Salvar
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </ListItem>
                            </List>
                        </Collapse>




                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="cicle-primaria" id="corum" onClick={handleClickOpenColorPrimaria} style={{ backgroundColor: colorPrimaria }} ></div>
                                {openColorPrimaria === true &&
                                    <div >
                                        <GithubPicker onChangeComplete={handleClickColorPrimaria} className="color-component" />
                                    </div>
                                }
                            </div>
                            <input type="text" disabled className="form-control campo " placeholder="Cor Primária"
                                aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="cicle-primaria" id="corum" onClick={handleClickOpenColorSecundaria} style={{ backgroundColor: colorSecundaria }} ></div>
                                {openColorSecundaria === true &&
                                    <div >
                                        <GithubPicker onChangeComplete={handleClickColorSecundaria} className="color-component" />
                                    </div>
                                }
                            </div>
                            <input type="text" disabled className="form-control campo " placeholder="Cor Secundária"
                                aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="cicle-primaria" id="corum" onClick={handleClickOpenColorPage} style={{ backgroundColor: colorPage }} ></div>
                                {openColorPage === true &&
                                    <div >
                                        <GithubPicker onChangeComplete={handleClickColorPage} className="color-component" />
                                    </div>
                                }
                            </div>
                            <input type="text" disabled className="form-control campo " placeholder="Cor da Página"
                                aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="upload-btn-wrapper">
                            <button type="file" className="btn" onchange="trocaBack.call(this)">Imagem de Fundo</button>
                            <input type="file" onchange="trocaBack.call(this)" name="myfile" className="Imagem de Fundo" />
                        </div>
                    </div>

                    <div className="border-landingpage" id="image-back" style={{ backgroundColor: imgFundo }}>
                        <div className="backgroundDegree-editv2d" style={{ backgroundColor: colorPage }}></div>
                        <div>
                            <div className=" logo-7">
                                <img src={imgLogo} id="image" className="rounded mx-auto d-blocks logo_produto"
                                    alt="Logo V2D" />
                            </div>



                            <div className="contentText">
                                <div className="contentTitle">
                                    <span id="t1">Demonstração</span>
                                </div>
                                <div className="contentTitle">
                                    <span id="t2">Voice Digital,</span>
                                </div>
                                <div className="conrtentText">
                                    <span id="d1">ecolha o canal de sua</span>
                                </div>
                                <div className="conrtentText">
                                    <span id="d2">preferência e inicie a interação.</span>
                                </div>
                            </div>


                            <div className="comunicacao-edit">

                                <div className="item-edit" style={{ backgroundColor: colorPrimaria }} id="boxum1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-edit" width="59.231"
                                        height="41.49" viewBox="0 0 59.231 41.49">
                                        <g transform="translate(30.152 14.776)">
                                            <path style={{ fill: colorSecundaria }} id="link1"
                                                d="M491.76,678.363c0-4.592-3.55-8.609-8.855-10.813a14.428,14.428,0,0,1,.291,2.882c0,9.244-8.738,16.68-20.515,18.057a23.912,23.912,0,0,0,10.855,2.479,25.658,25.658,0,0,0,5.844-.666,18.1,18.1,0,0,0,6.682,3.963,10.15,10.15,0,0,1-2.523-5.366C488.49,686.644,491.76,682.769,491.76,678.363Z"
                                                transform="translate(-462.681 -667.55)" />
                                        </g>
                                        <path style={{ fill: colorSecundaria }} id="link2"
                                            d="M444.831,693.144a1.457,1.457,0,0,1-1.1-2.415,11.511,11.511,0,0,0,2.622-4.917c-6.349-3.224-10.1-8.394-10.1-14,0-9.49,10.873-17.212,24.237-17.212s24.237,7.722,24.237,17.212-10.873,17.213-24.237,17.213a33.71,33.71,0,0,1-6.873-.7,24.632,24.632,0,0,1-8.306,4.741A1.449,1.449,0,0,1,444.831,693.144Zm15.656-35.631c-11.756,0-21.322,6.415-21.322,14.3,0,4.729,3.523,9.155,9.422,11.842a1.456,1.456,0,0,1,.842,1.513,13.033,13.033,0,0,1-.849,3.212,18.72,18.72,0,0,0,3.587-2.691,1.459,1.459,0,0,1,1.347-.373,30.611,30.611,0,0,0,6.973.8c11.757,0,21.322-6.413,21.322-14.3S472.245,657.513,460.488,657.513Z"
                                            transform="translate(-436.251 -654.598)" />
                                    </svg>
                                </div>


                                <div className="item-edit" style={{ backgroundColor: colorPrimaria }} id="boxum2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-edit" width="59.23"
                                        height="59.23" viewBox="0 0 59.23 59.23">

                                        <path style={{ fill: colorSecundaria }} id="link3"
                                            d="M581.323,646.823c-16.684,0-29.615,12.222-29.615,28.728a28.1,28.1,0,0,0,9.3,21.249,2.388,2.388,0,0,1,.8,1.686l.161,5.268a2.372,2.372,0,0,0,3.325,2.1l5.875-2.592a2.358,2.358,0,0,1,1.579-.119,32.2,32.2,0,0,0,8.574,1.137c16.686,0,29.615-12.221,29.615-28.727S598.009,646.823,581.323,646.823Zm17.782,22.108-8.694,13.795a4.446,4.446,0,0,1-6.424,1.185l-6.918-5.189a1.778,1.778,0,0,0-2.139.006l-9.35,7.1a1.406,1.406,0,0,1-2.038-1.871l8.7-13.8a4.447,4.447,0,0,1,6.424-1.185l6.918,5.189a1.778,1.778,0,0,0,2.139-.006l9.343-7.09A1.406,1.406,0,0,1,599.105,668.931Z"
                                            transform="translate(-551.709 -646.823)" />
                                    </svg>
                                </div>

                                <div className="item-edit" style={{ backgroundColor: colorPrimaria }} id="boxum3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-edit" width="59.231"
                                        height="59.231" viewBox="0 0 59.231 59.231">

                                        <g transform="translate(0 0)">
                                            <path style={{ fill: colorSecundaria }} id="link4"
                                                d="M723.924,677.052a29.125,29.125,0,0,1-43.132,25.263l-16.1,5.115,5.249-15.481a28.545,28.545,0,0,1-4.172-14.9,29.078,29.078,0,0,1,58.154,0ZM694.847,652.8A24.379,24.379,0,0,0,670.4,677.052a24,24,0,0,0,4.657,14.223L672,700.284,681.4,697.3a24.322,24.322,0,1,0,13.449-44.5Zm14.683,30.9c-.179-.294-.654-.471-1.367-.825s-4.217-2.065-4.869-2.3-1.131-.355-1.605.353-1.84,2.3-2.258,2.772-.83.533-1.545.179a19.519,19.519,0,0,1-5.73-3.51,21.316,21.316,0,0,1-3.966-4.9c-.415-.707-.043-1.09.313-1.442.322-.317.713-.826,1.07-1.237a4.751,4.751,0,0,0,.712-1.181,1.289,1.289,0,0,0-.059-1.239c-.178-.354-1.605-3.833-2.2-5.25s-1.187-1.178-1.6-1.178-.891-.059-1.367-.059a2.63,2.63,0,0,0-1.9.884,7.907,7.907,0,0,0-2.494,5.9c0,3.479,2.552,6.841,2.91,7.312s4.929,7.845,12.175,10.677,7.246,1.887,8.554,1.768,4.215-1.71,4.812-3.361A5.9,5.9,0,0,0,709.531,683.7Z"
                                                transform="translate(-664.693 -648.2)" />
                                        </g>
                                    </svg>
                                </div>

                                <div className="item-edit" style={{ backgroundColor: colorPrimaria }} id="boxum4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-edit" width="55.601"
                                        height="45.491" viewBox="0 0 55.601 45.491">

                                        <path style={{ fill: colorSecundaria }} id="link5"
                                            d="M829.876,652.737H789.44a7.583,7.583,0,0,0-7.582,7.582v30.327a7.583,7.583,0,0,0,7.582,7.582h40.436a7.583,7.583,0,0,0,7.582-7.582V660.319A7.583,7.583,0,0,0,829.876,652.737Zm0,5.055a2.5,2.5,0,0,1,.823.149l-21.041,13.428-21.042-13.428a2.507,2.507,0,0,1,.823-.149Zm0,35.383H789.44a2.528,2.528,0,0,1-2.528-2.528V660.781l21.167,16.933a2.527,2.527,0,0,0,3.158,0L832.4,660.781v29.865A2.527,2.527,0,0,1,829.876,693.175Z"
                                            transform="translate(-781.858 -652.737)" />
                                    </svg>
                                </div>

                                <div className="item-edit" style={{ backgroundColor: colorPrimaria }} id="boxum5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-edit" width="48.728"
                                        height="48.713" viewBox="0 0 48.728 48.713">
                                        <defs>
                                            {/* <style>
                                                        .a {
                                                            fill: #555859;
                                                        }

                                                        .b {
                                                            fill: none;
                                                            stroke: #555859;
                                                            stroke-miterlimit: 10;
                                                            stroke-width: 2px;
                                                        }
                                                    </style> */}
                                        </defs>
                                        <g transform="translate(0 0.129)">
                                            <path style={{ fill: colorSecundaria }} id="link6"
                                                d="M942.8,692.11l-7.689-7.692a3.285,3.285,0,0,0-2.349-.927,3.619,3.619,0,0,0-2.551,1.032l-4.156,4.158-1.125-.624a36.85,36.85,0,0,1-16.27-16.284l-.615-1.091,4.163-4.163a3.478,3.478,0,0,0,.1-4.9l-7.69-7.689a3.283,3.283,0,0,0-2.347-.928,3.612,3.612,0,0,0-2.551,1.037l-1.889,1.9-.179.29a12.078,12.078,0,0,0-1.709,3.019,12.484,12.484,0,0,0-.762,3.055c-.991,8.243,2.808,15.807,13.118,26.116,12.22,12.217,22.432,13.168,25.27,13.168a8.5,8.5,0,0,0,.863-.036,12.513,12.513,0,0,0,3.065-.771,11.911,11.911,0,0,0,3-1.7l.43-.337L942.7,697A3.469,3.469,0,0,0,942.8,692.11Z"
                                                transform="translate(-895.031 -653)" />
                                            <g transform="translate(25.073 0.871)">
                                                <path style={{ fill: colorSecundaria }} id="link7"
                                                    d="M922.528,675.484a1.38,1.38,0,0,0,.937.478.879.879,0,0,0,.636-.264,1.239,1.239,0,0,0,.1-.113l9.732-9.732,2.94,2.94c.64.639,1.061.356,1.213.2a1.81,1.81,0,0,0,.334-1.183l1.19-12.6a1.5,1.5,0,0,0-.342-1.053,1.221,1.221,0,0,0-.945-.378c-1.361,0-12.229,1.527-12.637,1.588a1.8,1.8,0,0,0-1.141.357c-.213.214-.46.687.293,1.439l2.694,2.694-9.634,9.632a1,1,0,0,0,.113,1.469Z"
                                                    transform="translate(-917.626 -653.785)" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>

                                <div className="item-edit" style={{ backgroundColor: colorPrimaria }} id="boxum6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-edit" width="54.277"
                                        height="45.511" viewBox="0 0 54.277 45.511">
                                        <defs>
                                            {/* <style>
                                                        .a {
                                                            fill: #555859;
                                                        }
                                                    </style> */}
                                        </defs>
                                        <path style={{ fill: colorSecundaria }} id="link8"
                                            d="M1061.124,659.624l-8.193,38.612c-.6,2.738-2.235,3.4-4.51,2.114l-12.48-9.2-6.02,5.8a3.148,3.148,0,0,1-2.516,1.229l.885-12.7,23.131-20.9c1.006-.885-.222-1.388-1.55-.5l-28.586,18-12.32-3.845c-2.678-.847-2.738-2.677.563-3.967l48.133-18.561C1059.9,654.894,1061.848,656.242,1061.124,659.624Z"
                                            transform="translate(-1007 -655.472)" />
                                    </svg>
                                </div>

                            </div>
                            <div className=" position-footer">

                                <span className="footerText">Powered by</span>
                                <img src="./imgs/logo.svg" alt="logo" />
                            </div>
                        </div>
                    </div>
                    {/* <div className=" position-button">
                    <button className="btn button-salvar">Salvar</button>
                </div> */}
                </div>
            </div>
        </div>
    );

}

export default EditV2d;