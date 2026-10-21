import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './DashboardLayout.css'

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  )
}

export default DashboardLayout