import React from 'react';
import foodpic from '../images/main-page-image.jpg';
import './Navigation.css'

const Navigation = () => {
  return (
    <>    
   <header>
          {/*} <img src={foodpic} />*/}
            <nav>
                <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Menu</a></li>                   
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact us</a></li>
                      <li><a href="#">Cart</a></li>
                </ul> 
            </nav>            
    </header>
    <div>
        <p className='content'>Order from your favourite menu and get it delivered</p>
    </div>
    </>
  );
}

export default Navigation;