
export function calculateStartupCost(investment) {
  if (investment < 5000) return "Insufficient capital for most business models.";
  if (investment < 20000) return "Suitable for micro-business or online store.";
  if (investment < 80000) return "Good for medium service-based businesses.";
  return "Strong capital for scalable or high-demand businesses.";
}

export function analyzeMarket(industry, targetMarket) {
  return `Based on your industry (${industry}), your target market segment (${targetMarket}) has moderate-to-high potential demand.`;
}


export function riskAssessment(investment) {
  if (investment < 20000) return "High risk — limited financial buffer.";
  if (investment < 70000) return "Medium risk — manageable with proper planning.";
  return "Low risk — strong financial coverage.";
}


export function financialProjection(investment) {
  return {
    revenue_year1: investment * 1.2,
    revenue_year2: investment * 1.6,
    revenue_year3: investment * 2.3,

    expenses_year1: investment * 0.4,
    expenses_year2: investment * 0.45,
    expenses_year3: investment * 0.5,

    profit_year1: investment * 0.8,
    profit_year2: investment * 1.15,
    profit_year3: investment * 1.8,

    roi: Math.round((investment * 1.8) / investment * 100),
    break_even_months: investment < 30000 ? 10 : 6,
  };
}

export function generateRecommendations(industry) {
  return `
Your selected industry (${industry}) shows positive growth indicators.
Recommendations:
- Focus on marketing differentiation.
- Start small and scale based on customer feedback.
- Track monthly expenses and adjust pricing strategy.
  `;
}

export function generateFeasibilityReport(data) {
  return {
    cost_analysis: calculateStartupCost(data.initial_investment),
    market_analysis: analyzeMarket(data.industry, data.target_market),
    risk_assessment: riskAssessment(data.initial_investment),
    financial_projection: financialProjection(data.initial_investment),
    recommendations: generateRecommendations(data.industry),
  };
}
