import React from 'react';
import './agentevirtual.css'
import Voltar from '../../img/voltar.svg'
import Amoeba from './img/amoeba.png'
import Avatar from './img/avatar.svg'
import { Link } from 'react-router-dom'

export default function agentevirtuais() {
    return (
        <div>
            <div className="back">
                <Link to="/" alt="Voltar">
                    <div className="back-v2d" style={{ marginTop: 20, marginLeft: 20 }}>
                        <span><img src={Voltar} alt="Voltar" style={{ marginTop: 3, marginRight: 3 }} /></span>
                        <span className="textBack">Voltar ao PAD</span>
                    </div>
                </Link>
            </div>

            <div className="container-ag">

                <div className="web-container">
                    <img alt="Amoeba" className="amoeba" src={Amoeba} />

                    <div className="title-div">
                        <p className="title"><span className="agente">AGENTE</span>Virtual</p>

                    </div><div className="barra-a"></div>

                    <div className="baloes-web">
                        <div className="baloes-primario">

                            <div className="item1 balao audio-display">
                                <p className="description">AUDITORIA</p>
                                <div className="direction-audio">
                                    <audio controls className="audio">
                                        <source src=".audio/Auditoria.mp3" type="audio/mpeg" />
                                        <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.ogg" type="audio/ogg" />
                                        Seu navegador não suporta áudio tag.
                </audio>
                                </div>
                            </div>



                            <div className="item2 balao audio-display">
                                <p className="description">NEGOCIADOR</p>
                                <div className="direction-audio">
                                    <audio controls className="audio">
                                        <source src="./audio/Negociador.mp3" type="audio/mpeg" />
                                        <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.ogg" type="audio/ogg" />
                                        Seu navegador não suporta áudio tag.
                </audio>
                                </div>
                            </div>


                        </div>

                        <div className="img-avatar-flex">
                            <img alt="avatar" className="avatar" src={Avatar} />
                        </div>

                        <div className="baloes-secundarios">


                            <div className="item3 balao audio-display">
                                <p className="description">LOCALIZADOR</p>
                                <div className="direction-audio">
                                    <audio controls className="audio">
                                        <source src=".audio/Localizador.mp3" type="audio/mpeg" />
                                        <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.ogg" type="audio/ogg" />
                                        Seu navegador não suporta áudio tag.
                </audio>
                                </div>
                            </div>

                            <div className="item4 balao audio-display">
                                <p className="description">PREVENTIVO</p>
                                <div className="direction-audio">
                                    <audio controls className="audio">
                                        <source src=".audio/Preventivo.mp3" type="audio/mpeg" />
                                        <source src=".audio/Preventivo.mp3" type="audio/ogg" />
                                        Seu navegador não suporta áudio tag.
                </audio>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="video">
                        <iframe className="iframe-video" width="250" height="127" title="AGENTE VIRTUAL" src="https://www.youtube.com/watch?v=4dNIA2YWS0g"
                            allowfullscreen></iframe> 
                        <iframe className="iframe-video" width="250" height="127" title="DASH AGENTE VIRTUAL" src="https://www.youtube.com/watch?v=a_ifHXEO3O8"
                            allowfullscreen></iframe>
                    </div>
                </div>


                <div className="mobile-container">
                    <div className="title-div">
                        <p className="title"><span className="agente">AGENTE</span>Virtual</p>
                        <div className="barra"></div>
                    </div>
                    <div className="img">
                        <img alt="Amoeba" className="amoeba-mobile" src="./img/amoeba.png" />
                    </div>

                    <div className="avatar-baloes-mobile">
                        <div className="p">
                            <img alt="avatar" className="avatar-mobile" src="./img/avatar.svg" />
                        </div>


                        <div className="baloes-mobile">
                            <div className="p">
                                <div className="item1 balao audio-display b-a-n">
                                    <p className="description">NEGOCIADOR</p>
                                    <div>
                                        <audio controls className="audio">
                                            <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.mp3"
                                                type="audio/mpeg" />
                                            <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.ogg"
                                                type="audio/ogg" />
                                            Seu navegador não suporta áudio tag.
                    </audio>
                                    </div>
                                </div>
                            </div>

                            <div className="p">
                                <div className="item2 balao audio-display b-a-lp">
                                    <p className="description">LOCALIZADOR</p>
                                    <div>
                                        <audio controls className="audio">
                                            <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.mp3"
                                                type="audio/mpeg" />
                                            <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.ogg"
                                                type="audio/ogg" />
                                            Seu navegador não suporta áudio tag.
                    </audio>
                                    </div>
                                </div>
                            </div>
                            <div className="p">
                                <div className="item3 balao audio-display b-a-lp">
                                    <p className="description">PREVENTIVO</p>
                                    <div>
                                        <audio controls className="audio">
                                            <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.mp3"
                                                type="audio/mpeg" />
                                            <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.ogg"
                                                type="audio/ogg" />
                                            Seu navegador não suporta áudio tag.
                    </audio>
                                    </div>
                                </div>
                            </div>
                            <div className="p">
                                <div className="item4 balao audio-display b-a-a">
                                    <p className="description">AUDITORIA</p>
                                    <div>
                                        <audio controls className="audio">
                                            <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.mp3"
                                                type="audio/mpeg" />
                                            <source src="/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.ogg"
                                                type="audio/ogg" />
                                            Seu navegador não suporta áudio tag.
                    </audio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mobile-video">
                        <iframe className="iframe-video" width="250" height="127" title="AGENTE VIRTUAL" src="https://www.youtube.com/watch?v=4dNIA2YWS0g"
                            allowfullscreen></iframe>
                        <iframe className="iframe-video" width="250" height="127" title="DASH AGENTE VIRTUAL" src="https://www.youtube.com/watch?v=a_ifHXEO3O8"
                            allowfullscreen></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
}
