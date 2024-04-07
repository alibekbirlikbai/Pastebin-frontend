import React from 'react';

import Footer from './Footer';

function Content() {
  return (
    <div className='Content_COMPONENT'>
        <main>
          <div className='content-container'>
            <div className='text-container'>
              <h1 className='content-title'>
                API сервис
              </h1>

              <div className='content-body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>

            <div className='img-container'>

            </div>
          </div>
        </main>

        <Footer />
    </div>
  );
}

export default Content;