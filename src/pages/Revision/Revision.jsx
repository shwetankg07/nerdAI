import { useState } from 'react'
import { useStudy } from '../../context/StudyContext'
import RevisionList from '../../components/RevisionList/RevisionList'
import { FiPlus } from 'react-icons/fi'

function Revision() {
    const { topics, revisions, addRevision } = useStudy()
    const [selectedTopic, setSelectedTopic] = useState('')
    const [date, setDate] = useState('')
    const [showForm, setShowForm] = useState(false)

    const completedTopics = topics.filter(function (t) { return t.status === 'Completed' })
    const today = new Date()

    const upcoming = revisions.filter(function (r) { return new Date(r.date) >= today })
    const past = revisions.filter(function (r) { return new Date(r.date) < today })

    function handleAdd() {
        if (selectedTopic === '' || date === '') return
        const newRevision = {
            id: Date.now().toString(),
            topic: selectedTopic,
            date: date
        }
        addRevision(newRevision)
        setSelectedTopic('')
        setDate('')
        setShowForm(false)
    }

    return (
        <div className="page">
            <div className="page-header">
                <h1 className="page-title">Revision Planner</h1>
                <button onClick={function () { setShowForm(!showForm) }} className="btn-primary">
                    <FiPlus /> Schedule Revision
                </button>
            </div>

            {showForm && (
                <div className="card form-card">
                    <h2 className="card-title">New Revision Session</h2>
                    <select value={selectedTopic} onChange={function (e) { setSelectedTopic(e.target.value) }}>
                        <option value="">Select a completed topic</option>
                        {completedTopics.map(function (t) {
                            return <option key={t.id} value={t.name}>{t.name}</option>
                        })}
                    </select>
                    <input
                        type="date"
                        value={date}
                        onChange={function (e) { setDate(e.target.value) }}
                    />
                    <div className="form-actions">
                        <button onClick={handleAdd} className="btn-primary">Save</button>
                        <button onClick={function () { setShowForm(false) }} className="btn-secondary">Cancel</button>
                    </div>
                </div>
            )}

            <div className="card">
                <h2 className="card-title">Upcoming Revisions</h2>
                {upcoming.length === 0 && <p className="empty-msg">No upcoming revisions scheduled.</p>}
                <RevisionList />
            </div>

            {past.length > 0 && (
                <div className="card">
                    <h2 className="card-title">Past Revisions</h2>
                    <div className="revision-list">
                        {past.map(function (r) {
                            return (
                                <div key={r.id} className="revision-item past">
                                    <span className="revision-topic">{r.topic}</span>
                                    <span className="revision-date">📅 {r.date}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Revision
