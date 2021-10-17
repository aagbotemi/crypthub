import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Cryptocurrencies from './views/Cryptocurrencies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CryptoDetail from './views/CryptoDetail';
import Exchanges from './views/Exchanges';
import Markets from './views/Markets';
import NotFound from './views/404';
import SEO from './components/SEO'

function App() {
  return (
    <Router>
      <SEO title="Home" />
      <div className="main-container">
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cryptocurrencies" component={Cryptocurrencies} />
            <Route path="/currencies/:coinId" component={CryptoDetail} />
            <Route path="/exchanges" component={Exchanges} />
            <Route path="/markets" component={Markets} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
