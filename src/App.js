import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/botani" render={() => <Home />} />
          <Route exact path="/botani/home" render={() => <Home />} />
          <Route exact path="/botani/about" render={() => <About />} />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

export default App;
