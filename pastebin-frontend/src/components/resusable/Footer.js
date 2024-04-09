import React from 'react';

import CopyRegular from '../../images/copy-regular.svg' 

function Footer() {
  return (
    <footer>
        <div className='email-block'>
          <a href="mailto:alibekbirlikbai@gmail.com" target='_blank'>
            <span>
              alibekbirlikbai@gmail.com
            </span>
          </a>

          {/* <span>
              <img src={CopyRegular} alt="My Image" />
          </span> */}
        </div>
    </footer>
  );
}

export default Footer;
