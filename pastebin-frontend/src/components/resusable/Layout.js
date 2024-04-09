import React from 'react';
import Header from './Header';
import Links from './Links';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className='wrapper'>      
      <Header />

      <div className='container'>
        <Links />

        <div className='main-info'>
          <div className='util_center_vertical_horizontal'>
            {children}
          </div>
          
          <Footer />
        </div>
      </div>
      
      <Navbar />
    </div>
  );
}

export default Layout;
