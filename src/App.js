import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StarsBackground from './components/StarsBackground';
import LoadingScreen from './components/LoadingScreen';
import SolarSystem from './components/SolarSystem';
import PortfolioSection from './components/PortfolioSection';
import Navigation from './components/Navigation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app">
        <LoadingScreen isLoading={isLoading} />
        <StarsBackground />
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<SolarSystem />} />
            <Route path="/section/:sectionId" element={<PortfolioSection />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App; 