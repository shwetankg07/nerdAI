import { FiTrash2, FiCheck, FiRotateCcw } from 'react-icons/fi'
import useTasks from '../../hooks/useTasks'

function TaskCard({ task }) {
    const { markDone, markRevision, removeTask } = useTasks()

    function getPriorityClass() {
        if (task.priority === 'High') return 'priority-high'
        if (task.priority === 'Medium') return 'priority-medium'
        return 'priority-low'
    }

    function getStatusClass() {
        if (task.status === 'Completed') return 'status-completed'
        if (task.status === 'Revision') return 'status-revision'
        if (task.status === 'Overdue') return 'status-overdue'
        return 'status-pending'
    }

    return (
        <div className={'task-card ' + getStatusClass()}>
            <div className="task-top">
                <span className="task-title">{task.title}</span>
                <span className={'priority-badge ' + getPriorityClass()}>{task.priority}</span>
            </div>
            <div className="task-meta">
                <span>{task.subject}</span>
                {task.topic && <span>· {task.topic}</span>}
                <span>· Due: {task.deadline}</span>
            </div>
            <div className="task-status-row">
                <span className="status-label">{task.status}</span>
                <div className="task-actions">
                    {task.status !== 'Completed' && (
                        <button onClick={function () { markDone(task.id) }} className="btn-icon success" title="Mark Done">
                            <FiCheck size={14} />
                        </button>
                    )}
                    {task.status !== 'Revision' && (
                        <button onClick={function () { markRevision(task.id) }} className="btn-icon warning" title="Mark for Revision">
                            <FiRotateCcw size={14} />
                        </button>
                    )}
                    <button onClick={function () { removeTask(task.id) }} className="btn-icon danger" title="Delete">
                        <FiTrash2 size={14} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard
