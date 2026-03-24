import { useState } from 'react'
import useSubjects from '../../hooks/useSubjects'
import SubjectCard from '../../components/SubjectCard/SubjectCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import useDebounce from '../../hooks/useDebounce'
import { FiPlus } from 'react-icons/fi'

const COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6']

function Subjects() {
    const { subjects, createSubject } = useSubjects()
    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState(COLORS[0])
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 300)

    function handleAdd() {
        if (name.trim() === '') return
        createSubject(name, description, color)
        setName('')
        setDescription('')
        setColor(COLORS[0])
        setShowForm(false)
    }

    const filtered = subjects.filter(function (s) {
        return s.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    })

    return (
        <div className="page">
            <div className="page-header">
                <h1 className="page-title">Subjects</h1>
                <button onClick={function () { setShowForm(!showForm) }} className="btn-primary">
                    <FiPlus /> Add Subject
                </button>
            </div>

            {showForm && (
                <div className="card form-card">
                    <h2 className="card-title">New Subject</h2>
                    <input
                        placeholder="Subject name"
                        value={name}
                        onChange={function (e) { setName(e.target.value) }}
                    />
                    <input
                        placeholder="Description (optional)"
                        value={description}
                        onChange={function (e) { setDescription(e.target.value) }}
                    />
                    <div className="color-picker">
                        <span>Pick Color:</span>
                        {COLORS.map(function (c) {
                            return (
                                <button
                                    key={c}
                                    className={'color-dot ' + (color === c ? 'selected' : '')}
                                    style={{ backgroundColor: c }}
                                    onClick={function () { setColor(c) }}
                                />
                            )
                        })}
                    </div>
                    <div className="form-actions">
                        <button onClick={handleAdd} className="btn-primary">Save</button>
                        <button onClick={function () { setShowForm(false) }} className="btn-secondary">Cancel</button>
                    </div>
                </div>
            )}

            <SearchBar value={search} onChange={setSearch} placeholder="Search subjects..." />

            <div className="subjects-list">
                {filtered.length === 0 && <p className="empty-msg">No subjects found.</p>}
                {filtered.map(function (subject) {
                    return <SubjectCard key={subject.id} subject={subject} />
                })}
            </div>
        </div>
    )
}

export default Subjects
