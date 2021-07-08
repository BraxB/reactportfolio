import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Work from './components/pages/Work';
import Err from './components/pages/Err';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
      <Router>
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route component={Err} />
            </Switch>
      </Router>
  );
}

export default App;