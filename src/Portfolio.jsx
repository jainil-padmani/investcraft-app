import React, { useState, useEffect } from 'react';
import InvestorCharacteristics from './components/InvestorCharacteristics';
import AssetAllocationChart from './components/AssetAllocationChart';
import { calculateRiskTolerance } from './utils/riskCalculator';
import { getAllocationFromRisk } from './utils/assetAllocation';

const Portfolio = ({ investorData, onInvestorChange }) => {
  const [riskTolerance, setRiskTolerance] = useState(null);
  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!investorData) {
      setError('Investor data is missing.');
      return;
    }

    try {
      const risk = calculateRiskTolerance(investorData);
      setRiskTolerance(risk);

      if (investorData.income) {
        setTotalInvestment(investorData.income);
      }
    } catch (e) {
      setError('Error calculating risk tolerance: ' + e.message);
    }
  }, [investorData]);

  const allocation = getAllocationFromRisk(riskTolerance, totalInvestment);

  if (error) {
    return (
      <div className="container mx-auto p-6 text-red-500">
        {error}
      </div>
    );
  }

  if (riskTolerance === null) {
    return (
      <div className="container mx-auto p-6">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Portfolio Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="transition-transform transform hover:scale-105 bg-white p-6 rounded-lg shadow-md">
          <InvestorCharacteristics
            onChange={(data) => {
              onInvestorChange(data);
              setTotalInvestment(data.income || 100000);
            }}
          />
        </div>

        <div className="transition-transform transform hover:scale-105 bg-white p-6 rounded-lg shadow-md">
          <AssetAllocationChart
            riskTolerance={riskTolerance}
            totalInvestment={totalInvestment}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
