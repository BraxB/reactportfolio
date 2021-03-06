import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Work from './components/pages/Work';
import Resume from "./components/pages/Resume";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./Assets/style.css";

function App() {
  return (
      <Router>
        <Navbar />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
        <Footer />
      </Router>
  );
}

export default App;