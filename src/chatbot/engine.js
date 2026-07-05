import { PLANS } from '../data/plans';

// Bindu is intentionally a guided, rule-based assistant rather than a free-form LLM.
// This guarantees it can never suggest a plan that isn't in our own catalogue —
// every recommendation is a lookup + score against PLANS, never generated text.

export const STEPS = {
  GREET: 'GREET',
  ASK_NAME: 'ASK_NAME',
  ASK_NEED: 'ASK_NEED',
  ASK_AGE: 'ASK_AGE',
  ASK_BUDGET: 'ASK_BUDGET',
  RESULTS: 'RESULTS',
  ASK_CONTACT: 'ASK_CONTACT',
  ASK_PHONE: 'ASK_PHONE',
  DONE: 'DONE',
};

export const NEED_OPTIONS = [
  { key: 'protection', labelKey: 'need.protection' },
  { key: 'childEducation', labelKey: 'need.childEducation' },
  { key: 'retirement', labelKey: 'need.retirement' },
  { key: 'investment', labelKey: 'need.investment' },
  { key: 'savings', labelKey: 'need.savings' },
  { key: 'loanProtection', labelKey: 'need.loanProtection' },
];

export const AGE_OPTIONS = [
  { key: 'below30', labelKey: 'chat.age.below30' },
  { key: '30to45', labelKey: 'chat.age.30to45' },
  { key: '45to60', labelKey: 'chat.age.45to60' },
  { key: 'above60', labelKey: 'chat.age.above60' },
];

export const BUDGET_OPTIONS = [
  { key: 'low', labelKey: 'chat.budget.low' },
  { key: 'mid', labelKey: 'chat.budget.mid' },
  { key: 'high', labelKey: 'chat.budget.high' },
  { key: 'veryHigh', labelKey: 'chat.budget.veryHigh' },
];

/**
 * Deterministic scoring: every recommended plan MUST come from PLANS.
 * We never fabricate a plan object — only filter/sort the existing array.
 */
export function recommendPlans({ need, age, budget }) {
  let candidates = PLANS.filter((p) => p.idealFor.includes(need));

  // Age-based nudges: senior citizens toward pension/term, young toward term/ULIP
  if (age === 'above60') {
    candidates = candidates.filter((p) => ['pension', 'term'].includes(p.category)).length
      ? candidates.filter((p) => ['pension', 'term'].includes(p.category))
      : candidates;
  }
  if (age === 'below30' && need === 'savings') {
    candidates = candidates.some((p) => p.category === 'ulip')
      ? candidates
      : candidates;
  }

  // Budget-based nudge: low budget favours term plans (cheapest per rupee of cover)
  if (budget === 'low') {
    const cheap = candidates.filter((p) => p.idealFor.includes('lowBudget') || p.category === 'term');
    if (cheap.length) candidates = cheap;
  }

  // De-duplicate & cap to top 3 for a focused answer
  const seen = new Set();
  const result = [];
  for (const c of candidates) {
    if (!seen.has(c.id)) {
      seen.add(c.id);
      result.push(c);
    }
    if (result.length >= 3) break;
  }

  // Fallback: if nothing matched the combination, widen to just "need"
  if (result.length === 0) {
    return PLANS.filter((p) => p.idealFor.includes(need)).slice(0, 3);
  }

  return result;
}

export function isValidIndianPhone(value) {
  const digits = value.replace(/\D/g, '');
  return /^[6-9]\d{9}$/.test(digits) || /^91[6-9]\d{9}$/.test(digits);
}
