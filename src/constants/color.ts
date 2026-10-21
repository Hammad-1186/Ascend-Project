export const CHART_COLORS = [
  '#6366f1',
  '#22c55e',
  '#f59e0b',
  '#ef4444',
  '#06b6d4',
  '#a855f7',
]
export const KPI_COLORS = {
  indigo: '#6366f1',
  green: '#22c55e',
  amber: '#f59e0b',
  cyan: '#06b6d4',
  purple: '#8b5cf6',
  rose: '#f43f5e',
  teal: '#14b8a6',
} as const

export type KPIColor = keyof typeof KPI_COLORS


export const CHART_THEME = {
  primary: '#6366f1',
  primaryStripe: '#4f46e5',
  track: '#e0e7ff',
  axis: '#64748b',
  grid: '#e2e8f0',
} as const