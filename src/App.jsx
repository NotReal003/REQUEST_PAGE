// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReportForm from './pages/ReportForm';
import Support from './pages/Support';
import Apply from './pages/Apply';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/report" element={<ReportForm />} />
            <Route path="/support" element={<Support />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;