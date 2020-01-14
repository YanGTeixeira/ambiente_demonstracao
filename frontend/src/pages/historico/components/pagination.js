import React from 'react';
import './styles.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage}) => {
  const pageNumbers = [];

  let width = window.innerWidth;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i); 
  }
  
  var numero = Math.ceil(totalPosts / postsPerPage);
  console.log(numero)
  console.log(currentPage)
  if(currentPage >= numero){
    numero = numero - 1
  }else{
    numero = currentPage;
  }

  return (
    width < 768 ?
    (
      <nav>
        <div className='pagination'>
          {
            <div className='pagination'>
              <p className='page-item seta' onClick={() => paginate(currentPage - 1)} > ❮ </p>
              <p className='page-item numero'>{currentPage}</p>
              <p className='page-item seta' onClick={() => paginate(numero + 1)}> ❯ </p>
            </div>
          }
        </div>
      </nav>
    )
    :
    (
      // <nav>
      //   <div className='pagination'>
      //     {pageNumbers.map(number => (
      //       number === currentPage ?
      //       (<p key={number} className='page-item selecionado' onClick={() => paginate(number)} >
      //         {/* <a href="#" className='page-link'> */}
      //         {number}
      //         {/* </a> */}
      //       </p>)
      //       :
      //       (<p key={number} className='page-item' onClick={() => paginate(number)} >
      //       {/*<a href="#" className='page-link'>*/}
      //         {number}
      //       {/*</a>*/}
      //     </p>)
            
      //     ))}
      //   </div>
      // </nav>
      <nav>
        <div className='pagination'>
          {
            <div className='pagination'>
              <p className='page-item seta' onClick={() => paginate(currentPage - 1)} > ❮ </p>
              <p className='page-item numero'>{currentPage}</p>
              <p className='page-item seta' onClick={() => paginate(numero + 1)}> ❯ </p>
            </div>
          }
        </div>
      </nav>
    )
    
  );
};

export default Pagination;