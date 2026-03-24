import useProgress from '../../hooks/useProgress'
import ProgressChart from '../../components/ProgressChart/ProgressChart'
import RevisionList from '../../components/RevisionList/RevisionList'

function Dashboard() {
    const { total, completed, pending, revision, percentage } = useProgress()

    return (
        <div className="page">
            <h1 className="page-title">Dashboard</h1>

            <div className="stats-grid">
                <div className="stat-card">
                    <span className="stat-number">{total}</span>
                    <span className="stat-label">Total Tasks</span>
                </div>
                <div className="stat-card completed">
                    <span className="stat-number">{completed}</span>
                    <span className="stat-label">Completed</span>
                </div>
                <div className="stat-card pending">
                    <span className="stat-number">{pending}</span>
                    <span className="stat-label">Pending</span>
                </div>
                <div className="stat-card revision">
                    <span className="stat-number">{revision}</span>
                    <span className="stat-label">For Revision</span>
                </div>
            </div>

            <div className="progress-section">
                <div className="card">
                    <h2 className="card-title">Overall Progress</h2>
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar" style={{ width: percentage + '%' }}></div>
                    </div>
                    <span className="progress-percent">{percentage}% Complete</span>
                </div>
            </div>

            <div className="dashboard-bottom">
                <div className="card">
                    <h2 className="card-title">Subject Progress</h2>
                    <ProgressChart />
                </div>
                <div className="card">
                    <h2 className="card-title">Upcoming Revisions</h2>
                    <RevisionList />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
