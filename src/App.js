import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Contact from './Contact/Contact';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
