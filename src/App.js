import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Work from './components/pages/Work';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Navbar />
            <Switch>
              <Router exact path="/">
                <About />
              </Router>
              <Router exact path="/work">
                <Work />
              </Router>
              <Router exact path="/contact">
                <Contact />
              </Router>
            </Switch>
        <Footer />
      </Router>
  );
}

export default App;