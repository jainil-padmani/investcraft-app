import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'; // Using React Tooltip library
import { FiInfo, FiAlertCircle } from 'react-icons/fi'; // Including alert icon for warnings

const InvestorCharacteristics = ({ onChange }) => {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({});

  const validate = (name, value) => {
    const newErrors = { ...errors };
    if (name === 'age' && (value < 10 || value > 100)) {
      newErrors.age = 'Age must be between 10 and 100';
    } else if (name === 'income' && (value < 1000 || value > 1000000000)) {
      newErrors.income = 'Income must be between 1,000 and 1,000,000,000';
    } else {
      delete newErrors[name]; // Remove error if valid
    }
    setErrors(newErrors);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    validate(name, value);
    onChange(e);
  };

  return (
    <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-6 rounded-lg shadow-xl">
      <Tooltip /> {/* Render Tooltip component for active tooltips */}
      
      <h2 className="text-2xl font-bold text-teal-700 mb-6">Investor Characteristics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* First column */}
        <div className="space-y-6">
          {/* Age input with tooltip */}
          <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <label className="text-teal-800">Age:</label>
              <FiInfo className="text-gray-500 cursor-pointer" data-tip="Enter your age in years" />
            </div>
            <input
              type="number"
              name="age"
              value={formValues.age || ''}
              onChange={handleInputChange}
              className={`w-full p-2 border ${errors.age ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Enter age"
            />
            {errors.age && (
              <div className="flex items-center text-red-600">
                <FiAlertCircle className="mr-2" />
                {errors.age}
              </div>
            )}
          </div>

          {/* Income input with tooltip */}
          <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <label className="text-teal-800">Income:</label>
              <FiInfo className="text-gray-500 cursor-pointer" data-tip="Enter your annual income" />
            </div>
            <input
              type="number"
              name="income"
              value={formValues.income || ''}
              onChange={handleInputChange}
              className={`w-full p-2 border ${errors.income ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Enter income"
            />
            {errors.income && (
              <div className="flex items-center text-red-600">
                <FiAlertCircle className="mr-2" />
                {errors.income}
              </div>
            )}
          </div>

          {/* Investment Goal */}
          <div className="bg-white p-4 rounded-lg border hover:shadow-md transition"> 
            <div className="flex items-center justify-between">
              <label className="text-teal-800">Investment Goal:</label>
              <FiInfo className="text-gray-500" data-tip="Select your investment goal" />
            </div>
            <select
              name="investmentGoal"
              value={formValues.investmentGoal || ''}
              onChange={handleInputChange}
              className={`w-full p-2 border ${errors.investmentGoal ? 'border-red-600' : 'border-gray-300'} rounded`}
            >
              <option value="">Select goal</option>
              <option value="Retirement">Retirement</option>
              <option value="Wealth Accumulation">Wealth Accumulation</option>
              <option value="Education">Education</option>
              <option value="Real Estate">Real Estate</option>
            </select>
          </div>
        </div>

        {/* Second column */}
        <div className="space-y-6">
          {/* Time Horizon */}
          <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <label className="text-teal-800">Time Horizon (years):</label>
              <FiInfo className="text-gray-500" data-tip="Enter your investment horizon in years" />
            </div>
            <input
              type="number"
              name="timeHorizon"
              value={formValues.timeHorizon || ''}
              onChange={handleInputChange}
              className={`w-full p-2 border ${errors.timeHorizon ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Enter time horizon"
            />
            {errors.timeHorizon && (
              <div className="flex items-center text-red-600">
                <FiAlertCircle className="mr-2" />
                {errors.timeHorizon}
              </div>
            )}
          </div>

          {/* Marital Status */}
          <div className="bg-white p-4 rounded-lg border hover:shadow-md transition"> 
            <div className="flex items-center justify-between">
              <label className="text-teal-800">Marital Status:</label>
              <FiInfo className="text-gray-500 cursor-pointer" data-tip="Select your marital status" />
            </div>
            <select
              name="maritalStatus"
              value={formValues.maritalStatus || ''}
              onChange={handleInputChange}
              className={`w-full p-2 border ${errors.maritalStatus ? 'border-red-600' : 'border-gray-300'} rounded`}
            >
              <option value="">Select marital status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>

          {/* Children */}
          <div className="bg-white p-4 rounded-lg border hover:shadow-md transition"> 
            <div className="flex items-center justify-between">
              <label className="text-teal-800">Children:</label>
              <FiInfo className="text-gray-500" data-tip="Enter the number of children" />
            </div>
            <input
              type="number"
              name="children"
              value={formValues.children || ''}
              onChange={handleInputChange}
              className={`w-full p-2 border ${errors.children ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Enter number of children"
            />
            {errors.children && (
              <div className="flex items-center text-red-600">
                <FiAlertCircle className="mr-2" />
                {errors.children}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorCharacteristics;
