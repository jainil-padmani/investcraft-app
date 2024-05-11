import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import AssetAllocationChart from './AssetAllocationChart';
import { getAllocationFromRisk } from '../utils/assetAllocation';
import { FaChartLine, FaMoneyBillWave, FaBullseye } from 'react-icons/fa'; // Example icons

const Dashboard = ({ riskTolerance, timeHorizon }) => {
  const [investmentData, setInvestmentData] = useState([]);
  const [returnsData, setReturnsData] = useState([]);
  const [assetAllocation, setAssetAllocation] = useState([]);

  useEffect(() => {
    // Sample data for investments
    const investments = [
      { category: 'Stocks', name: 'Reliance Industries', currentValue: 100, expectedReturn: 120 },
      { category: 'Bonds', name: 'Indian Government Bonds', currentValue: 100, expectedReturn: 105 },
      { category: 'Gold', name: 'Sovereign Gold Bonds', currentValue: 100, expectedReturn: 110 },
      { category: 'Real Estate', name: 'DLF', currentValue: 100, expectedReturn: 115 },
      { category: 'Mutual Funds', name: 'HDFC Equity Fund', currentValue: 100, expectedReturn: 125 },
    ];
    setInvestmentData(investments);

    // Generate expected returns for each investment across 1 to 20 years
    const returns = [];
    const years = Array.from({ length: 20 }, (_, i) => i + 1);

    investments.forEach((investment) => {
      years.forEach((year) => {
        let expectedReturn;

        switch (investment.category) {
          case 'Stocks':
            expectedReturn = investment.currentValue * Math.pow(1.15, year);
            break;
          case 'Bonds':
            expectedReturn = investment.currentValue * Math.pow(1.05, year);
            break;
          case 'Gold':
            expectedReturn = investment.currentValue * Math.pow(1.06, year);
            break;
          case 'Real Estate':
            expectedReturn = investment.currentValue * Math.pow(1.07, year);
            break;
          case 'Mutual Funds':
            expectedReturn = investment.currentValue * Math.pow(1.12, year);
            break;
          default:
            expectedReturn = investment.currentValue;
            break;
        }

        returns.push({
          time: year,
          investment: investment.name,
          return: expectedReturn.toFixed(2),
        });
      });
    });

    setReturnsData(returns);

    const allocation = getAllocationFromRisk(riskTolerance);
    setAssetAllocation(allocation);
  }, [riskTolerance, timeHorizon]); // Ensure timeHorizon is in the dependency array

  return (
    <div className="container mx-auto p-8 bg-gradient-to-br from-green-200 to-green-300 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Investment Dashboard (India)</h1>

      {/* Section: Recommended Investments */}
      <div className="bg-gradient-to-r from-green-100 to-green-300 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          <FaMoneyBillWave className="mr-2" /> Recommended Investments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentData.map((investment) => (
            <div
              key={investment.name}
              className="bg-white p-6 rounded-lg border hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <h3 className="text-lg font-semibold text-gray-800">{investment.name}</h3>
              <p>Category: {investment.category}</p>
              <p>Current Value: ₹{investment.currentValue}</p>
              <p>Expected Return: ₹{investment.expectedReturn}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Asset Allocation */}
      <div className="mb-6 bg-gradient-to-r from-teal-100 to-teal-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          <FaBullseye className="mr-2" /> Asset Allocation
        </h2>
        <AssetAllocationChart riskTolerance={riskTolerance} assetAllocation={assetAllocation} />
      </div>

      {/* Section: Expected Returns */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          <FaChartLine className="mr-2" /> Expected Returns in {timeHorizon} Years
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={returnsData.filter((d) => d.time === timeHorizon)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="investment" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="return" fill="#82ca9d" label={{ position: 'top' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
