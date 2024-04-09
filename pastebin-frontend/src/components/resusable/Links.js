import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Links() {
  return (
    <div className='Links_COMPONENT'>

        <div className='contacts-block'>
          <div className='contacts'>
              <a href="https://alibekbirlikbai.github.io" target='_blank' className='text-underline_hover'>
                  <span>
                    my site
                  </span>
              </a>
          </div>

          <div className='social-media'>
            <div className='icon'>
              <a href="https://github.com/alibekbirlikbai" target='_blank'>
                <FontAwesomeIcon icon={faGithub} size='lg'/>
              </a>
            </div>

            <div className='icon'>
              <a href="https://www.linkedin.com/in/alibek-birlikbai" target='_blank'>
                <FontAwesomeIcon icon={faLinkedinIn} size='lg'/>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Links;