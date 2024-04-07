import React from 'react';

import Header from '../resusable/Header'
import Links from '../resusable/Links'
import Content from '../resusable/Content'
import Navbar from '../resusable/Navbar';

function Home() {
  return (
    <div className='wrapper'>
      <Header />
    
      <div className='container'>
        <Links/>

        <Content/>
      </div>

      <Navbar/>
    </div>
  );
}

export default Home;
