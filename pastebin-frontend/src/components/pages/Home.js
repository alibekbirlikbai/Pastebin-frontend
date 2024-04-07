import React from 'react';

import Header from '../resusable/Header'
import Links from '../resusable/Links'
import Content from '../resusable/Content'
import Footer from '../resusable/Footer'

function Home() {
  return (
    <div className='wrapper'>
      <Header />
    
      <div className='container'>
        <Links/>

        <Content/>
      </div>
    </div>
  );
}

export default Home;
