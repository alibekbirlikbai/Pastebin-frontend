import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Links() {
  return (
    <div className='Links_COMPONENT'>

        <div className='contacts-block'>
          <div className='contacts'>
              <a href="https://alibekbirlikbai.github.io" target='_blank'>
                <span>
                  my site
                  </span>
              </a>
          </div>

          <div className='social-media'>
            <div className='icon'>
              <a href="https://github.com/alibekbirlikbai/Pastebin-backend" target='_blank'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <div className='icon'>
              <a href="https://www.linkedin.com/in/alibek-birlikbai" target='_blank'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>

          </div>
        </div>
    </div>
  );
}

export default Links;