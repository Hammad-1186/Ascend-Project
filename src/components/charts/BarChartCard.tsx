import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Card from '../ui/Card'
import type { ChartDatum } from '../../types'
import './ChartCard.css'

type BarChartCardProps = {
  title: string
  data: ChartDatum[]
  color?: string
  valueFormatter?: (value: number) => string
}

function BarChartCard({
  title,
  data,
  color = '#6366f1',
  valueFormatter = (v) => String(v),
}: BarChartCardProps) {
  return (
    <Card title={title}>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} fontSize={12} />
            <YAxis tickFormatter={valueFormatter} tickLine={false} axisLine={false} fontSize={12} />
            <Tooltip formatter={(value) => valueFormatter(Number(value))} />
            <Bar dataKey="value" fill={color} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default BarChartCard