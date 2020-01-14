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
        fontSize: 13,
        color: 'grey',
        marginTop: 0,
        marginBottom: 2,
    },

    button: {
        width: '50%',
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


const ModalV2d = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);


    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.openModalV2d}
                onClose={props.handleCloseV2d}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className={classes.corp}>
                        <h2 className={classes.title}>V2D</h2>
                        <p className={classes.txt}>Disque para continuar a demonstração</p>
                        <p className={classes.txt}><b>0800 545 5126</b></p>

                        <button className={classes.button}>OK</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalV2d;