import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
    },
    corp: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'left',
    },
    title: {
        color: '#343434'
    },
    txt: {
        fontSize: 12,
        color: 'grey',
        marginTop: 0,
        marginBottom: 2,
    },

    button: {
        width: '70%',
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
    },
    lg:{
        width: '100%',
        textAlign: 'left',
        marginTop: -10,
        marginBottom: 5,
    }

}));


const ModalOmega = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);


    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.openModalOmega}
                onClose={props.handleCloseOmega}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className={classes.corp}>
                        <h2 className={classes.title}>Ômega 3</h2>
                        <div className={classes.lg}>
                        <p className={classes.txt}>Para continuar a demonstração use</p>
                        <p className={classes.txt}>Login: <b>Admin</b></p>
                        <p className={classes.txt}>Senha: <b>Flex@2019</b></p>
                        </div>
                        <button className={classes.button}>ABRIR EM NOVA ABA</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalOmega;