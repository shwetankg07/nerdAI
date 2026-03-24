import { useState } from 'react'
import useTasks from '../../hooks/useTasks'
import useSubjects from '../../hooks/useSubjects'
import TaskCard from '../../components/TaskCard/TaskCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import useDebounce from '../../hooks/useDebounce'
import { FiPlus } from 'react-icons/fi'

function Tasks() {
    const { tasks, createTask } = useTasks()
    const { subjects } = useSubjects()
    const [activeTab, setActiveTab] = useState('All')
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState('')
    const [subject, setSubject] = useState('')
    const [topic, setTopic] = useState('')
    const [deadline, setDeadline] = useState('')
    const [priority, setPriority] = useState('Medium')
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('deadline')
    const [filterPriority, setFilterPriority] = useState('All')
    const debouncedSearch = useDebounce(search, 300)

    const tabs = ['All', 'Pending', 'Completed', 'Overdue', 'Revision']

    function handleAdd() {
        if (title.trim() === '' || deadline === '') return
        createTask(title, subject, topic, deadline, priority)
        setTitle('')
        setSubject('')
        setTopic('')
        setDeadline('')
        setPriority('Medium')
        setShowForm(false)
    }

    function getFilteredTasks() {
        const today = new Date()
        let result = tasks

        if (activeTab === 'Pending') result = result.filter(t => t.status === 'Pending')
        if (activeTab === 'Completed') result = result.filter(t => t.status === 'Completed')
        if (activeTab === 'Revision') result = result.filter(t => t.status === 'Revision')
        if (activeTab === 'Overdue') result = result.filter(t => t.status !== 'Completed' && new Date(t.deadline) < today)

        if (filterPriority !== 'All') result = result.filter(t => t.priority === filterPriority)

        if (debouncedSearch) {
            result = result.filter(function (t) {
                return (
                    t.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                    t.subject.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                    t.topic.toLowerCase().includes(debouncedSearch.toLowerCase())
                )
            })
        }

        result = [...result].sort(function (a, b) {
            if (sortBy === 'deadline') return new Date(a.deadline) - new Date(b.deadline)
            if (sortBy === 'priority') {
                const order = { High: 0, Medium: 1, Low: 2 }
                return order[a.priority] - order[b.priority]
            }
            if (sortBy === 'subject') return a.subject.localeCompare(b.subject)
            return 0
        })

        return result
    }

    const filtered = getFilteredTasks()

    return (
        <div className="page">
            <div className="page-header">
                <h1 className="page-title">Tasks</h1>
                <button onClick={function () { setShowForm(!showForm) }} className="btn-primary">
                    <FiPlus /> Add Task
                </button>
            </div>

            {showForm && (
                <div className="card form-card">
                    <h2 className="card-title">New Task</h2>
                    <input
                        placeholder="Task title"
                        value={title}
                        onChange={function (e) { setTitle(e.target.value) }}
                    />
                    <select value={subject} onChange={function (e) { setSubject(e.target.value) }}>
                        <option value="">Select Subject</option>
                        {subjects.map(function (s) {
                            return <option key={s.id} value={s.name}>{s.name}</option>
                        })}
                    </select>
                    <input
                        placeholder="Topic (optional)"
                        value={topic}
                        onChange={function (e) { setTopic(e.target.value) }}
                    />
                    <input
                        type="date"
                        value={deadline}
                        onChange={function (e) { setDeadline(e.target.value) }}
                    />
                    <select value={priority} onChange={function (e) { setPriority(e.target.value) }}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <div className="form-actions">
                        <button onClick={handleAdd} className="btn-primary">Save</button>
                        <button onClick={function () { setShowForm(false) }} className="btn-secondary">Cancel</button>
                    </div>
                </div>
            )}

            <div className="tabs">
                {tabs.map(function (tab) {
                    return (
                        <button
                            key={tab}
                            onClick={function () { setActiveTab(tab) }}
                            className={activeTab === tab ? 'tab active' : 'tab'}
                        >
                            {tab}
                        </button>
                    )
                })}
            </div>

            <div className="task-filters">
                <SearchBar value={search} onChange={setSearch} placeholder="Search tasks..." />
                <select value={filterPriority} onChange={function (e) { setFilterPriority(e.target.value) }} className="filter-select">
                    <option value="All">All Priorities</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <select value={sortBy} onChange={function (e) { setSortBy(e.target.value) }} className="filter-select">
                    <option value="deadline">Sort by Deadline</option>
                    <option value="priority">Sort by Priority</option>
                    <option value="subject">Sort by Subject</option>
                </select>
            </div>

            <div className="tasks-list">
                {filtered.length === 0 && <p className="empty-msg">No tasks found.</p>}
                {filtered.map(function (task) {
                    return <TaskCard key={task.id} task={task} />
                })}
            </div>
        </div>
    )
}

export default Tasks
