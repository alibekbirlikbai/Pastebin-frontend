import React from 'react';

import Footer from './Footer';

function Content() {
  return (
    <div className='Content_COMPONENT'>
        <main>
          <div className='content-container'>
            <div className='text-container'>
              <h2>
                Title
              </h2>

              <div>
                content
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