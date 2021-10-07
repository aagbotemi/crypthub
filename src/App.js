import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './views/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Navbar />
      {/* <Home />
      <Footer /> */}
      
    </Router>
  );
}

export default App;
