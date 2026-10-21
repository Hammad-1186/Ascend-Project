import { useState, type ReactNode } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Card from '../ui/Card'
import { CHART_THEME } from '../../constants/color'
import type { CostComparison } from '../../types'
import './ComparisonBarChart.css'

type ComparisonBarChartProps = {
  title: string
  data: CostComparison[]
  valueFormatter?: (value: number) => string
  actions?: ReactNode // filters go here
}

type TooltipProps = {
  active?: boolean
  label?: string | number
  payload?: ReadonlyArray<{ dataKey?: string | number; name?: string; value?: number | string }>
  formatter: (value: number) => string
}

function ChartTooltip({ active, label, payload, formatter }: TooltipProps) {
  if (!active || !payload?.length) return null

  return (
    <div className="cbc-tooltip">
      <p className="cbc-tooltip__label">{label}</p>
      {payload.map((item) => (
        <div key={String(item.dataKey)} className="cbc-tooltip__row">
          <span
            className={`cbc__dot ${item.dataKey === 'cost' ? 'cbc__dot--primary' : 'cbc__dot--secondary'}`}
          />
          <span className="cbc-tooltip__name">{item.name}</span>
          <span className="cbc-tooltip__value">{formatter(Number(item.value))}</span>
        </div>
      ))}
    </div>
  )
}

function ComparisonBarChart({
  title,
  data,
  valueFormatter = (v) => String(v),
  actions,
}: ComparisonBarChartProps) {
  const [showCost, setShowCost] = useState(true)
  const [showBudget, setShowBudget] = useState(true)

  return (
    <Card>
      <div className="cbc__header">
        <h2 className="cbc__title">{title}</h2>

        <div className="cbc__controls">
          <div className="cbc__legend">
            <button
              type="button"
              className={`cbc__legend-item ${showBudget ? '' : 'cbc__legend-item--off'}`}
              onClick={() => setShowBudget((v) => !v)}
            >
              <span className="cbc__dot cbc__dot--secondary" />
              Budget
            </button>
            <button
              type="button"
              className={`cbc__legend-item ${showCost ? '' : 'cbc__legend-item--off'}`}
              onClick={() => setShowCost((v) => !v)}
            >
              <span className="cbc__dot cbc__dot--primary" />
              Cost
            </button>
          </div>
          {actions}
        </div>
      </div>

      <div className="cbc__chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={44} barGap={-44}>
            <defs>
              <pattern
                id="cost-stripes"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
                patternTransform="rotate(45)"
              >
                <rect width="8" height="8" fill={CHART_THEME.primary} />
                <rect width="4" height="8" fill={CHART_THEME.primaryStripe} />
              </pattern>
            </defs>

            <CartesianGrid stroke={CHART_THEME.grid} strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fill: CHART_THEME.axis, fontSize: 12 }}
            />
            <YAxis
              tickFormatter={valueFormatter}
              tickLine={false}
              axisLine={false}
              width={56}
              tick={{ fill: CHART_THEME.axis, fontSize: 12 }}
            />
            <Tooltip
              cursor={false}
              content={<ChartTooltip formatter={valueFormatter} />}
            />

            <Bar
              dataKey="budget"
              name="Budget"
              fill={CHART_THEME.track}
              radius={[8, 8, 0, 0]}
              hide={!showBudget}
            />
            <Bar
              dataKey="cost"
              name="Cost"
              fill="url(#cost-stripes)"
              radius={[8, 8, 0, 0]}
              hide={!showCost}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default ComparisonBarChart