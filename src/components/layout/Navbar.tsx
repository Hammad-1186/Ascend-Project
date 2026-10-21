import { LayoutDashboard } from 'lucide-react'
import './Navbar.css'

const links = ['Dashboard', 'Projects', 'Budget', 'HR', 'Organizations']

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <LayoutDashboard size={22} />
          Ascend
        </div>
        <nav className="navbar__links">
          {links.map((link) => (
            <a key={link} href="#" className="navbar__link">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar