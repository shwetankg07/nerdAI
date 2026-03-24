import { Link, useLocation } from 'react-router-dom'
import { FiGrid, FiBook, FiCheckSquare, FiCalendar, FiCpu } from 'react-icons/fi'

function Navbar() {
    const location = useLocation()

    function isActive(path) {
        return location.pathname === path ? 'nav-link active' : 'nav-link'
    }

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <FiCpu size={24} />
                <span>NerdAI</span>
            </div>
            <div className="nav-links">
                <Link to="/dashboard" className={isActive('/dashboard')}>
                    <FiGrid size={18} />
                    <span>Dashboard</span>
                </Link>
                <Link to="/subjects" className={isActive('/subjects')}>
                    <FiBook size={18} />
                    <span>Subjects</span>
                </Link>
                <Link to="/tasks" className={isActive('/tasks')}>
                    <FiCheckSquare size={18} />
                    <span>Tasks</span>
                </Link>
                <Link to="/revision" className={isActive('/revision')}>
                    <FiCalendar size={18} />
                    <span>Revision</span>
                </Link>
                <Link to="/ai-tools" className={isActive('/ai-tools')}>
                    <FiCpu size={18} />
                    <span>AI Tools</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
