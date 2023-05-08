import React from 'react';

function BannerProduct() {
  return (
    <div className='message-bar' style={{height:"16rem", background: '#000'}}>
      <nav>
        <ul className='d-flex' style={{ fontFamily: "CentraNo2", color: "#fff", fontSize: '1.2rem', fontWeight: "600",  listStyle: "none"}}>
          <a href='/' style={{ textDecoration: "none", color: "#fff"}}> 
            <span>Home</span>
          </a>
          <li className='inlineBlock'>
            <span className='mx-3'>/</span>  
          </li>
          <li className='inlineBlock'>
            <span>Products</span>  
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default BannerProduct;
