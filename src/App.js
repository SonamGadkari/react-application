import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Contact from './Contact/Contact';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';
import Home from './Home/Home';

function App() {
  return (
    <div>   
      <Navigation />             
        <Routes>
          <Route exact path="/menu" element={<Menu />} />            
          <Route exact path="/about" element={<About />} />            
          <Route exact path="/contact" element={<Contact />} />            
          <Route path="/cart" element={<Cart />} />        
          <Route path="/" element={<Home />} />  
        </Routes>    
    </div>
  );
}

export default App;
