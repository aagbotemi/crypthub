import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Cryptocurrencies from './views/Cryptocurrencies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cryptocurrencies" component={Cryptocurrencies} />
      </Switch>
      {/* <Home />
      <Cryptocurrencies /> */}
    </Router>
  );
}

export default App;
