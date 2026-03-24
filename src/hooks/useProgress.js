import { useStudy } from '../context/StudyContext'

function useProgress() {
    const { tasks, topics } = useStudy()

    const total = tasks.length
    const completed = tasks.filter(t => t.status === 'Completed').length
    const pending = tasks.filter(t => t.status === 'Pending').length
    const revision = tasks.filter(t => t.status === 'Revision').length

    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)

    const completedTopics = topics.filter(t => t.status === 'Completed').length
    const totalTopics = topics.length

    return { total, completed, pending, revision, percentage, completedTopics, totalTopics }
}

export default useProgress
