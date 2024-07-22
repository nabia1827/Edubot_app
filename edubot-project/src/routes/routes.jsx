import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landing/landingPage';
import DemoPage from '../pages/demo/demoPage';

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/demo" element={<DemoPage/>} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
