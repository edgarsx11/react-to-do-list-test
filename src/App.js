import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <Router>
      <Navbar/>
    <div className="container pt-4">
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/about"} exact element={<About />} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
