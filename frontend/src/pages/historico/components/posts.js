import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';

// Modal
import ModalBlackbox from '../../main/component/modal/blackbox-historico/index';

const Posts = ({ posts, loading, setOpenModalBlackbox, openModalBlackbox, postsPerPage, totalPosts, paginate, currentPage}) => {
    if (loading) {
        return <h2>Loading ...</h2>
    }
    let width = window.innerWidth;

    const handleOpenBlackbox = () => {
        setOpenModalBlackbox(true);
    }
    const handleCloseBlackbox = () => {
        setOpenModalBlackbox(false);
    }

    const formatarData = data =>
    {
        var partesData = data.split("-");
        var partesHora = partesData[2].split(" ");
        //var horario = partesHora[1];

        /********** Mudar para horario do BR **********/
        var p = partesHora[1].split(":");
        var novoHorario = p[0] - 3;
        var horario = novoHorario+":"+p[1]+":"+p[2];

        return partesHora[0]+"/"+partesData[1]+"/"+partesData[0]+" ás "+horario;
    }

    const formatarValor = nvalor =>
    {
        var valor = nvalor / 100;

        if(valor !== null){
            var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', });
            return valorFormatado;
        }else{
            return "";
        }   
    }

    const religar = async(post) =>{
        handleOpenBlackbox()
        try {
            await axios.post('http://localhost:8000/api/v1/religar',{...post, acao: 'religar' })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        
        <div>
            <ModalBlackbox 
            openModalBlackbox={openModalBlackbox} 
            handleCloseBlackbox={handleCloseBlackbox}
            />
                {
                    width < 768 ?
                    (
                        <Table stickyHeader style={{width: 100}} responsive="true" aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Valor</TableCell>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Repetir Ligação</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {posts.map(post => (
                                    <TableRow key={post.id}>
                                        <TableCell>{formatarValor(post.valor)}</TableCell>
                                        <TableCell>{post.nome}</TableCell>
                                        <TableCell style={{paddingLeft: 30}} className={post.status}>⬤</TableCell>
                                        {
                                            post.status === "pago" ?
                                            (
                                                <TableCell className="ligar"></TableCell>
                                            )
                                            :
                                            (
                                                <TableCell className="ligar"><button className="btn-ligar" onClick={() => religar(post)} >Ligar</button></TableCell>
                                            )
                                        }                                       
                                    </TableRow>
                                
                                ))}

                            </TableBody>
                        </Table>
                    )
                    :
                    (
                        <Table stickyHeader responsive="true" aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Valor</TableCell>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>Telefone</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Repetir Ligação</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {posts.map(post => (
                                    <TableRow key={post.id}>
                                        <TableCell>{formatarData(post.dt_criacao)}</TableCell>
                                        <TableCell>{formatarValor(post.valor)}</TableCell>
                                        <TableCell>{post.nome}</TableCell>
                                        <TableCell>{post.telefone}</TableCell>
                                        <TableCell className={post.status}>{post.status}</TableCell>
                                        {
                                            post.status === "pago" ?
                                            (
                                                <TableCell className="ligar"></TableCell>
                                            )
                                            :
                                            (
                                                <TableCell className="ligar"><button className="btn-ligar" onClick={() => religar(post)} >ligar</button></TableCell>
                                            )
                                        }
                                        
                                    </TableRow>
                                    
                                ))}

                            </TableBody>
                        </Table>
                    )
                }

            
        </div>
    )
};

export default Posts