import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Cryptocurrencies from './views/Cryptocurrencies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CryptoDetail from './views/CryptoDetail';
import Exchanges from './views/Exchanges';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cryptocurrencies" component={Cryptocurrencies} />
        <Route path="/currencies/:coinId" component={CryptoDetail} />
        <Route path="/exchanges" component={Exchanges} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
