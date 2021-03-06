import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from './Components/Footer';
import NavMenu from './Components/NavMenu';
import SmoothScrollbar from './Components/SmoothScrollbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollbar>
      </Router>
    </>
  );
}
