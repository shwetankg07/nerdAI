import { FiTrash2 } from 'react-icons/fi'

function TopicCard({ topic, onStatusChange, onDelete }) {
    return (
        <div className="topic-card">
            <div className="topic-info">
                <span className="topic-name">{topic.name}</span>
                <span className={'difficulty-badge ' + topic.difficulty.toLowerCase()}>{topic.difficulty}</span>
            </div>
            <div className="topic-controls">
                <select
                    value={topic.status}
                    onChange={function (e) { onStatusChange(topic.id, e.target.value) }}
                    className="status-select"
                >
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Needs Revision</option>
                </select>
                <button onClick={function () { onDelete(topic.id) }} className="btn-icon danger">
                    <FiTrash2 size={14} />
                </button>
            </div>
            {topic.notes && <p className="topic-notes">{topic.notes}</p>}
        </div>
    )
}

export default TopicCard
