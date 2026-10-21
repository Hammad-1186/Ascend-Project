import { useState } from 'react'
import { Building2, FolderKanban, Users, Wallet } from 'lucide-react'
import KPICard from '../components/dashbaord/KPICard'
import ComparisonBarChart from '../components/charts/ComparisonBarChart'
import PieChartCard from '../components/charts/PieChartCard'
import Card from '../components/ui/Card'
import Select from '../components/ui/Select'
import DataTable, { type Column } from '../components/ui/Datatable'
import { organizations, kpiSeries, costComparison, periodOptions } from '../data/mockData'
import { formatCurrency, formatNumber } from '../utils/format'
import type { Organization, Period } from '../types'
import './DashboardPage.css'

const sum = (key: 'projects' | 'budget' | 'hr') =>
  organizations.reduce((total, org) => total + org[key], 0)

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

const columns: Column<Organization>[] = [
  {
    header: 'Organization',
    render: (o) => (
      <div className="dashboard__org">
        <span className="dashboard__org-avatar">{getInitials(o.name)}</span>
        <span className="dashboard__org-name">{o.name}</span>
      </div>
    ),
  },
  { header: 'Labs', align: 'center', render: (o) => o.labs },
  { header: 'HR', align: 'center', render: (o) => formatNumber(o.hr) },
  {
    header: 'Projects',
    align: 'center',
    render: (o) => <span className="dashboard__badge">{o.projects}</span>,
  },
]

function DashboardPage() {
  const [period, setPeriod] = useState<Period>('this-month')

  const projectData = organizations.map((o) => ({ name: o.name, value: o.projects }))

  return (
    <div className="dashboard">
      <h1 className="dashboard__heading">Dashboard</h1>

      <div className="dashboard__kpis">
        <KPICard
          title="Projects"
          value={sum('projects')}
          icon={FolderKanban}
          design="bars"
          color="indigo"
          trend={12}
          series={kpiSeries.projects}
        />
        <KPICard
          title="Budget"
          value={formatCurrency(sum('budget'))}
          icon={Wallet}
          design="area"
          color="green"
          trend={8}
          series={kpiSeries.budget}
        />
        <KPICard
          title="HR"
          value={formatNumber(sum('hr'))}
          icon={Users}
          design="bars"
          color="amber"
          trend={-3}
          series={kpiSeries.hr}
        />
        <KPICard
          title="Organizations"
          value={organizations.length}
          icon={Building2}
          design="area"
          color="rose"
          trend={5}
          series={kpiSeries.organizations}
        />
      </div>

      <ComparisonBarChart
        title="Cost by Organization"
        data={costComparison[period]}
        valueFormatter={formatCurrency}
        actions={
          <Select
            value={period}
            options={periodOptions}
            onChange={setPeriod}
            ariaLabel="Select period"
          />
        }
      />

      <div className="dashboard__split">
        <Card title="Organization Overview">
          <DataTable columns={columns} rows={organizations} rowKey={(o) => o.id} />
        </Card>
        <PieChartCard
          title="Projects by Organization"
          data={projectData}
          totalLabel="Projects"
        />
      </div>
    </div>
  )
}

export default DashboardPage