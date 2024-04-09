import React from 'react';

import Robot from '../../images/robot.svg' 


function Home() {
  return (
    <main>
      <div className='content'>
        <div className='block' id='docs-description'>
          <h1 className='block__title'>
            API сервис
          </h1>

          <div className='block__body'>
            <div className='block__item'>
              Документация проекта (Добавлю позже)
            </div>

            <div className='block__item'>
              <strong>
                Подробнее: 
              </strong>

              <a href="https://alibekbirlikbai.github.io/projects#current-projects" target='_blank' className='text-underline_hover'>
                <i>
                  про разработку
                </i>
              </a>
            </div>
          </div>
        </div>

        <div className='block' id='docs-img'>
          <div className='block__body'>
            <div className='block__item'>
              <div className='block--img'>
                {/* <img src={Robot} alt="My Image"/> */}
              </div>
            </div>
          </div>

          <div className='block__title'>
            
          </div>
        </div>
      </div>
  </main>
  );
}

export default Home;
