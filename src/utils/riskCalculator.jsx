/**
 * Calculates the risk tolerance score based on various investor characteristics.
 * @param {Object} investorData - The investor data containing various characteristics.
 * @returns {number} - A risk tolerance score between 0 and 20.
 * @throws {Error} - If any required data is missing.
 */
export const calculateRiskTolerance = (investorData) => {
  if (!investorData) {
    throw new Error("Investor data is required.");
  }

  const requiredFields = [
    "age",
    "income",
    "netWorth",
    "maritalStatus",
    "children",
    "investmentGoal",
    "timeHorizon",
    "investmentKnowledge",
  ];

  // Check if all required fields are provided
  requiredFields.forEach((field) => {
    if (!(field in investorData)) {
      throw new Error(`Missing required field: ${field}`);
    }
  });

  const {
    age,
    income,
    netWorth,
    maritalStatus,
    children,
    investmentGoal,
    timeHorizon,
    investmentKnowledge,
  } = investorData;

  let risk = 0;

  // Age-based risk calculation
  if (age < 30) {
    risk += 6; // Younger, higher risk tolerance
  } else if (age < 50) {
    risk += 4; // Middle-aged, moderate risk
  } else {
    risk += 2; // Older, lower risk tolerance
  }

  // Income-based risk calculation
  if (income > 100000) {
    risk += 4; // Higher income, higher risk tolerance
  } else if (income > 50000) {
    risk += 2; // Moderate income
  } else {
    risk += 1; // Lower income, lower risk tolerance
  }

  // Net worth-based risk calculation
  if (netWorth > 1000000) {
    risk += 4; // High net worth, higher risk
  } else if (netWorth > 500000) {
    risk += 2; // Moderate net worth
  } else {
    risk += 1; // Low net worth, lower risk tolerance
  }

  // Marital status and children-based risk calculation
  if (maritalStatus === "Married" && children > 1) {
    risk -= 2; // Married with multiple children, lower risk
  } else if (maritalStatus === "Married") {
    risk -= 1; // Married, generally lower risk
  }

  // Investment goal-based risk calculation
  if (investmentGoal === "Wealth Accumulation") {
    risk += 3; // Aggressive investment goals
  } else if (investmentGoal === "Retirement") {
    risk += 2; // Conservative investment goals
  }

  // Time horizon-based risk calculation
  if (timeHorizon > 10) {
    risk += 3; // Longer time horizon, higher risk
  } else if (timeHorizon < 5) {
    risk -= 2; // Shorter time horizon, lower risk
  }

  // Investment knowledge-based risk calculation
  if (investmentKnowledge === "Expert") {
    risk += 3; // Knowledgeable investors, higher risk
  } else if (investmentKnowledge === "Intermediate") {
    risk += 2; // Moderate knowledge
  } else {
    risk += 1; // Beginner, lower risk
  }

  return Math.min(risk, 20); // Cap risk tolerance at 20
};
