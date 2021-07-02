import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import Home from './Pages/home';
import About from './Pages/about';
import Projects from './Pages/projects';
import Contact from './Pages/contact';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
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
      </Router>
    </>
  );
}
