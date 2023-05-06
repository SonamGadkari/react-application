import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>    
   <header>
          {/*} <img src={foodpic} />*/}
            <nav>
                <ul>                  
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/menu">Menu</Link></li>                   
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/contact">Contact us</Link></li>
                      <li><Link to="/cart">Cart</Link></li>
                </ul> 
            </nav>            
    </header> 
   
    </>
  );
}

export default Navigation;