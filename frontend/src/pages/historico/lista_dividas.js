import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './lista_dividas.css'
import Posts from './components/posts'
import Pagination from './components/pagination'

import Logo from './img/logo.png';
import Voltar from './img/voltar.svg';
import Flex from './img/logo-flex.svg';
import Paper from '@material-ui/core/Paper';

import {Link} from 'react-router-dom'


const Divida = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const [openModalBlackbox, setOpenModalBlackbox] = React.useState(false);

    if(currentPage === 0){
        setCurrentPage(1); 
    }

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:8000/api/v1/listadividas');
            setPosts(res.data.result);
            setLoading(false)
        }
        fetchPosts();
    }, []);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Chage page
    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <div className="principal">
            <Link to="/" alt="Voltar">
                <div className="back-v2d" style={{ marginTop: 20, marginLeft: 20 }}>
                    <span><img src={Voltar} alt="Voltar" style={{ marginRight: 15 }} /></span>
                    <span style={{ fontSize: 11 }}>Voltar ao PAD</span>
                </div>
            </Link>
            <div className="main-container">
                <div className="form-box">
                    
                    <Paper className="tam">
                        <div className="box-logo">
                        <Link to="/blackbox" alt="Voltar">
                            <div className="back-v2d" style={{ marginTop: 20, marginLeft: 20 }}>
                                <span><img src={Voltar} alt="Voltar" style={{ width: 14, marginRight: 15 }} /></span>
                            </div>
                        </Link>
                            <img className="logo" src={Logo} alt="logo" />
                        </div>
                        <Posts 
                            posts={currentPosts} 
                            loading={loading} 
                            setOpenModalBlackbox={setOpenModalBlackbox} 
                            openModalBlackbox={openModalBlackbox}
                            postsPerPage={postsPerPage} 
                            totalPosts={posts.length} 
                            paginate={paginate} 
                            currentPage={currentPage}
                        />
                        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
                    </Paper>
                </div>
            </div>

            <div className="footer-flex not-visible-mobile">
                <span className="footer-Text">Powered by </span>
                <img src={Flex} alt="logo" />
            </div>
        </div>
    );
}
export default Divida;