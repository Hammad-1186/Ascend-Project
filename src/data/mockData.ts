import type { Organization } from '../types'

export const organizations: Organization[] = [
  { id: 1, name: 'Alpha Corp', labs: 4, hr: 120, projects: 12, budget: 900000, cost: 640000 },
  { id: 2, name: 'Beta Labs', labs: 6, hr: 85, projects: 9, budget: 700000, cost: 520000 },
  { id: 3, name: 'Gamma Tech', labs: 3, hr: 60, projects: 7, budget: 450000, cost: 410000 },
  { id: 4, name: 'Delta Systems', labs: 5, hr: 140, projects: 15, budget: 1100000, cost: 830000 },
  { id: 5, name: 'Omega Group', labs: 2, hr: 40, projects: 5, budget: 300000, cost: 180000 },

]

export const kpiSeries = {
  projects: [5, 7, 6, 9, 8, 10, 12],
  budget: [310, 340, 330, 390, 420, 410, 460],
  hr: [210, 220, 225, 240, 238, 250, 262],
  organizations: [3, 3, 4, 4, 5, 5, 5],
}


import type { CostComparison, Period } from '../types'

export const periodOptions: { value: Period; label: string }[] = [
  { value: 'this-month', label: 'This Month' },
  { value: 'last-month', label: 'Last Month' },
  { value: 'this-year', label: 'This Year' },
]

export const costComparison: Record<Period, CostComparison[]> = {
  'this-month': [
    { name: 'Alpha Corp', cost: 640000, budget: 900000 },
    { name: 'Beta Labs', cost: 520000, budget: 700000 },
    { name: 'Gamma Tech', cost: 410000, budget: 450000 },
    { name: 'Delta Systems', cost: 830000, budget: 1100000 },
    { name: 'Omega Group', cost: 180000, budget: 300000 },
  ],
  'last-month': [
    { name: 'Alpha Corp', cost: 590000, budget: 880000 },
    { name: 'Beta Labs', cost: 480000, budget: 700000 },
    { name: 'Gamma Tech', cost: 430000, budget: 450000 },
    { name: 'Delta Systems', cost: 760000, budget: 1050000 },
    { name: 'Omega Group', cost: 210000, budget: 300000 },
  ],
  'this-year': [
    { name: 'Alpha Corp', cost: 7400000, budget: 10800000 },
    { name: 'Beta Labs', cost: 6100000, budget: 8400000 },
    { name: 'Gamma Tech', cost: 4600000, budget: 5400000 },
    { name: 'Delta Systems', cost: 9800000, budget: 13200000 },
    { name: 'Omega Group', cost: 2300000, budget: 3600000 },
  ],
}