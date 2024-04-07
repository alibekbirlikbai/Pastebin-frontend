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
          {children} {/* This will render the content specific to each page */}
          
          <Footer />
        </div>
      </div>
      
      <Navbar />
    </div>
  );
}

export default Layout;
