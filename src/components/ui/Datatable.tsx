import type { ReactNode } from 'react'
import './DataTable.css'

export type Column<T> = {
  header: string
  render: (row: T) => ReactNode
  align?: 'left' | 'center' | 'right'
}

type DataTableProps<T> = {
  columns: Column<T>[]
  rows: T[]
  rowKey: (row: T) => string | number
}

function DataTable<T>({ columns, rows, rowKey }: DataTableProps<T>) {
  return (
    <div className="data-table__wrapper">
      <table className="data-table">
        <thead>
          <tr className="data-table__head-row">
            {columns.map((col) => (
              <th
                key={col.header}
                className={`data-table__head-cell data-table__cell--${col.align ?? 'left'}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={rowKey(row)} className="data-table__row">
              {columns.map((col) => (
                <td
                  key={col.header}
                  className={`data-table__cell data-table__cell--${col.align ?? 'left'}`}
                >
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable