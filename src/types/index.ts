export type Organization = {
  id: number
  name: string
  labs: number
  hr: number
  projects: number
  budget: number
  cost: number
}

export type ChartDatum = {
  name: string
  value: number
}

export type Period = 'this-month' | 'last-month' | 'this-year'

export type CostComparison = {
  name: string
  cost: number
  budget: number
}