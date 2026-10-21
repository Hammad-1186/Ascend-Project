import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import Card from '../ui/Card'
import { CHART_COLORS } from '../../constants/color'
import type { ChartDatum } from '../../types'
import './ChartCard.css'

type PieChartCardProps = {
  title: string
  data: ChartDatum[]
  totalLabel?: string
}

function PieChartCard({ title, data, totalLabel = 'Total' }: PieChartCardProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card title={title}>
      <div className="pie">
        <div className="pie__chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                cornerRadius={5}
                stroke="none"
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="pie__center">
            <span className="pie__total">{total}</span>
            <span className="pie__total-label">{totalLabel}</span>
          </div>
        </div>

        <ul className="pie__legend">
          {data.map((item, i) => (
            <li key={item.name} className="pie__legend-item">
              <span
                className="pie__dot"
                style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }}
              />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export default PieChartCard