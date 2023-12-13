import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CalculatorAffine from './Core/CalcAffine'; // Updated import
import CalculatorCaesar from './Core/CalcCaisar'; // Added import for Caesar Cipher calculator
import About from './Core/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CalculatorAffine />} />
          <Route path="/caesarcipher" element={<CalculatorCaesar />} /> {/* Added route for Caesar Cipher calculator */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
