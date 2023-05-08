import React from 'react';

function Home() {
  return (
    <div className='message-bar' style={{height:"16rem", background: '#000'}}>
      <nav>
        <ul className='d-flex' style={{ fontFamily: "CentraNo2", color: "#fff", fontSize: '1.2rem', fontWeight: "600",  listStyle: "none"}}>
          <a href='/' style={{ textDecoration: "none", color: "#fff"}}> 
            <span>Home</span>
          </a>
        </ul>
      </nav>
    </div>
  );
}
export default Home;