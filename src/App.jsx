import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Portfolio from './Portfolio';
import HomePage from './components/HomePage';
import InvestorCharacteristics from './components/InvestorCharacteristics';
import FinancialAdvice from './components/FinancialAdvice';
import { calculateRiskTolerance } from './utils/riskCalculator';
import AboutUsPage from './components/AboutUs';


/**
 * Main App Component
 * Manages routing and global state for the application.
 */
const App = () => {
  // Initialize state for investor data with meaningful default values
  const [investorData, setInvestorData] = useState({
    age: '',
    income: '',
    investmentGoal: 'Wealth Accumulation', // Default investment goal
    timeHorizon: 5, // Default time horizon in years
    maritalStatus: 'Single',
    children: '',
    netWorth: '',
    investmentKnowledge: 'Beginner',
    riskPreference: 'Medium',
  });

  // State to track selected assets and risk tolerance
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [riskTolerance, setRiskTolerance] = useState(0);

  // Update risk tolerance based on investor data changes
  useEffect(() => {
    const calculatedRisk = calculateRiskTolerance(investorData);
    setRiskTolerance(calculatedRisk);
  }, [investorData]); // Depend on investorData for recalculating risk tolerance

  // Handle changes to investor characteristics
  const handleInvestorChange = (e) => {
    const { name, value } = e.target;
    setInvestorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle asset selection for portfolio
  const handleAssetChange = (e) => {
    const { value, checked } = e.target;
    setSelectedAssets((prev) => (checked ? [...prev, value] : prev.filter((v) => v !== value)));
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6">
        {/* Define application routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={<Dashboard riskTolerance={riskTolerance} timeHorizon={investorData.timeHorizon} />}
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                investorData={investorData}
                riskTolerance={riskTolerance} // Pass risk tolerance to Portfolio
                selectedAssets={selectedAssets}
                onInvestorChange={handleInvestorChange}
                onAssetChange={handleAssetChange}
              />
            }
          />
          <Route
            path="/investor-characteristics"
            element={<InvestorCharacteristics onChange={handleInvestorChange} />}
          />
          <Route path="/financial-advice" element={<FinancialAdvice />} />
          <Route
            path="/about-us"
            element={<AboutUsPage onChange={handleInvestorChange} />}
          />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
