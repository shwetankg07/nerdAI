import { useStudy } from '../context/StudyContext'

function useTasks() {
    const { tasks, addTask, updateTask, deleteTask } = useStudy()

    function createTask(title, subject, topic, deadline, priority) {
        const newTask = {
            id: Date.now().toString(),
            title: title,
            subject: subject,
            topic: topic,
            deadline: deadline,
            priority: priority,
            status: 'Pending'
        }
        addTask(newTask)
    }

    function markDone(id) {
        updateTask(id, { status: 'Completed' })
    }

    function markRevision(id) {
        updateTask(id, { status: 'Revision' })
    }

    function removeTask(id) {
        deleteTask(id)
    }

    function getOverdueTasks() {
        const today = new Date()
        return tasks.filter(t => {
            return t.status !== 'Completed' && new Date(t.deadline) < today
        })
    }

    return { tasks, createTask, markDone, markRevision, removeTask, getOverdueTasks }
}

export default useTasks
