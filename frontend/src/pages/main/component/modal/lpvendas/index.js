import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import InputMask from 'react-input-mask';
import axios from 'axios';
function getModalStyle() {
    const top = 48;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 230,
        backgroundColor: 'gainsboro',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 2, 1),
        borderRadius: 20,
        textAlign: 'center',
    },
    corp: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        color: '#343434'
    },
    txt: {
        fontSize: 11,
        color: 'grey',
        marginTop: 2,
        marginBottom: 2,
    },
    input: {
        width: '87%',
        border: 0,
        backgroundColor: '#FFFFFF',
        padding: 7,
    },
    button: {
        width: '25%',
        marginTop: 10,
        border: 0,
        backgroundColor: '#FAB628',
        color: 'white',
        padding: 5,
        cursor: 'pointer',
    },
    junt: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "start",
        marginTop: 7,
    },
    label: {
        fontSize: 12,
    }

}));


const ModalLp = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [ preenchido ] = useState(true);
    
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('')

    const changeTelefone = (e) => {
        setTelefone(e.target.value);
    };
    const changeName = (e) => {
        setNome(e.target.value);
    };


    const createUser = async () => {
        
        if (preenchido) {
            const putAll = {
                nome: nome,
                telefone: telefone,
            }
            console.log(putAll)
            try {
                await axios.post('http://localhost:8000/cadastroUsuario', putAll)
                console.log(putAll)
                setNome("");
                setTelefone("");

            } catch (err) {
                console.error(err)
            }
        }

    }

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.openModalLp}
                onClose={props.handleCloseLp}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className={classes.corp}>
                        <h2 className={classes.title}>LP DE VENDAS</h2>
                        <p className={classes.txt}>Preencha para ter acesso a demonstração</p>
                        <div className={classes.junt}><span className={classes.label}>Nome:</span>
                            <input placeholder="Nome" className={classes.input} onChange={changeName} value={nome}></input>
                        </div>
                        <div className={classes.junt}>
                        <span className={classes.label}>Telefone:</span>
                            <InputMask
                                mask="(99)99999-9999"
                                maskChar=''
                                className={classes.input}
                                placeholder="Preencha aqui"
                                value={telefone}
                                onChange={changeTelefone}
                            />
                        </div>
                        <button className={classes.button} onClick={createUser}>OK</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalLp;