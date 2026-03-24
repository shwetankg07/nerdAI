import { useStudy } from '../../context/StudyContext'
import { FiTrash2 } from 'react-icons/fi'

function RevisionList() {
    const { revisions, deleteRevision } = useStudy()

    if (revisions.length === 0) {
        return <p className="empty-msg">No revision sessions scheduled.</p>
    }

    return (
        <div className="revision-list">
            {revisions.map(function (revision) {
                return (
                    <div key={revision.id} className="revision-item">
                        <div className="revision-info">
                            <span className="revision-topic">{revision.topic}</span>
                            <span className="revision-date">📅 {revision.date}</span>
                        </div>
                        <button onClick={function () { deleteRevision(revision.id) }} className="btn-icon danger">
                            <FiTrash2 size={14} />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default RevisionList
