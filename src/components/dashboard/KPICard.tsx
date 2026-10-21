import type { LucideIcon } from 'lucide-react'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { Area, AreaChart, Bar, BarChart, Cell, ResponsiveContainer } from 'recharts'
import { KPI_COLORS, type KPIColor } from '../../constants/color'
import './KPICard.css'

type KPICardProps = {
  title: string
  value: string | number
  icon: LucideIcon
  design?: 'bars' | 'area' | 'plain'
  color?: KPIColor
  trend?: number
  caption?: string
  series?: number[]
}

function KPICard({
  title,
  value,
  icon: Icon,
  design = 'bars',
  color = 'indigo',
  trend,
  caption = 'vs last month',
  series = [],
}: KPICardProps) {
  const hex = KPI_COLORS[color]
  const isPositive = (trend ?? 0) >= 0
  const TrendIcon = isPositive ? TrendingUp : TrendingDown
  const chartData = series.map((v, i) => ({ i, v }))
  const showChart = design !== 'plain' && chartData.length > 0
  const gradientId = `grad-${title.replace(/\s/g, '')}`

  return (
    <div className={`kpi-card kpi-card--${color}`}>
      <div className="kpi-card__top">
        <p className="kpi-card__title">{title}</p>
        <div className="kpi-card__icon">
          <Icon size={20} />
        </div>
      </div>

      <p className="kpi-card__value">{value}</p>

      {trend !== undefined && (
        <div className="kpi-card__trend-row">
          <span className="kpi-card__trend">
            <TrendIcon size={14} />
            {isPositive ? '+' : '-'}
            {Math.abs(trend)}%
          </span>
          <span className="kpi-card__caption">{caption}</span>
        </div>
      )}

      {showChart && (
        <div className="kpi-card__chart">
          <ResponsiveContainer width="100%" height="100%">
            {design === 'bars' ? (
              <BarChart data={chartData} barCategoryGap={4}>
                <Bar dataKey="v" radius={[4, 4, 0, 0]}>
                  {chartData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={hex}
                      fillOpacity={i === chartData.length - 1 ? 1 : 0.3}
                    />
                  ))}
                </Bar>
              </BarChart>
            ) : (
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={hex} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={hex} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke={hex}
                  strokeWidth={2.5}
                  fill={`url(#${gradientId})`}
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default KPICard