// src/utils/dummyData.jsx
const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array as input");
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// Helper function to generate a random integer within a specified range
const getRandomInt = (min, max) => {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("min and max must be numbers");
  }

  if (min >= max) {
    throw new Error(`Invalid range: min (${min}) should be less than max (${max}).`);
  }

  // Return a random integer between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Constraints for various attributes
const minAge = 10;
const maxAge = 100;

const minIncome = 1000;
const maxIncome = 1_000_000_000; // 1 billion (10 crore rupees)

const minNetWorth = 0;
const maxNetWorth = 1_000_000_000; // 1 billion

const minChildren = 0;
const maxChildren = 10;

const timeHorizonMin = 1;
const timeHorizonMax = 20;

// Potential values for some attributes
const investmentGoals = ['Retirement', 'Wealth Accumulation', 'Education', 'Real Estate'];
const maritalStatuses = ['Single', 'Married'];
const investmentKnowledges = ['Beginner', 'Intermediate', 'Expert'];
const riskPreferences = ['Low', 'Medium', 'High'];

// Create a list of dummy investors
export const dummyInvestors = Array.from({ length: 1000 }, (_, i) => {
  const age = getRandomInt(minAge, maxAge);
  const income = getRandomInt(minIncome, maxIncome);
  const timeHorizon = getRandomInt(timeHorizonMin, timeHorizonMax);
  const children = getRandomInt(minChildren, maxChildren);
  const netWorth = getRandomInt(minNetWorth, maxNetWorth);

  // Validate generated data
  if (age < minAge || age > maxAge) {
    throw new Error(`Invalid age for Investor ${i + 1}: ${age}. Must be between ${minAge} and ${maxAge}.`);
  }
  if (income < minIncome || income > maxIncome) {
    throw new Error(`Invalid income for Investor ${i + 1}: ${income}. Must be between ${minIncome} and ${maxIncome}.`);
  }
  if (children < minChildren || children > maxChildren) {
    throw new Error(`Invalid number of children for Investor ${i + 1}: ${children}. Must be between ${minChildren} and ${maxChildren}.`);
  }
  if (netWorth < minNetWorth || netWorth > maxNetWorth) {
    throw new Error(`Invalid net worth for Investor ${i + 1}: ${netWorth}. Must be between ${minNetWorth} and ${maxNetWorth}.`);
  }

  // Return the generated investor object
  return {
    name: `Investor ${i + 1}`,
    age,
    income,
    investmentGoal: getRandomElement(investmentGoals),
    timeHorizon,
    maritalStatus: getRandomElement(maritalStatuses),
    children,
    netWorth,
    investmentKnowledge: getRandomElement(investmentKnowledges),
    riskPreference: getRandomElement(riskPreferences),
  };
});
