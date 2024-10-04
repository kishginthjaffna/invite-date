import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SadPage from './components/SadPage';
import SelectDate from './components/SelectDate';
import SelectType from './components/SelectType';
import FinalPage from './components/FinalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sad" element={<SadPage />} />
        <Route path="/select-date" element={<SelectDate />} />
        <Route path="/select-type" element={<SelectType />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
