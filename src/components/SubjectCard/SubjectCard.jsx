import { useState } from 'react'
import useSubjects from '../../hooks/useSubjects'
import { FiTrash2, FiChevronDown, FiChevronUp, FiPlus } from 'react-icons/fi'
import TopicCard from '../TopicCard/TopicCard'

function SubjectCard({ subject }) {
    const { removeSubject, createTopic, getTopicsForSubject, changeTopicStatus, removeTopic } = useSubjects()
    const [open, setOpen] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [topicName, setTopicName] = useState('')
    const [difficulty, setDifficulty] = useState('Easy')
    const [notes, setNotes] = useState('')

    const topics = getTopicsForSubject(subject.id)

    function handleAddTopic() {
        if (topicName.trim() === '') return
        createTopic(subject.id, topicName, difficulty, notes)
        setTopicName('')
        setDifficulty('Easy')
        setNotes('')
        setShowForm(false)
    }

    return (
        <div className="subject-card" style={{ borderLeft: '4px solid ' + subject.color }}>
            <div className="subject-card-header">
                <div>
                    <h3>{subject.name}</h3>
                    <p>{subject.description}</p>
                </div>
                <div className="subject-card-actions">
                    <button onClick={() => setOpen(!open)} className="btn-icon">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    <button onClick={() => removeSubject(subject.id)} className="btn-icon danger">
                        <FiTrash2 />
                    </button>
                </div>
            </div>

            {open && (
                <div className="subject-topics">
                    {topics.length === 0 && <p className="empty-msg">No topics yet.</p>}
                    {topics.map(function (topic) {
                        return (
                            <TopicCard
                                key={topic.id}
                                topic={topic}
                                onStatusChange={changeTopicStatus}
                                onDelete={removeTopic}
                            />
                        )
                    })}

                    {showForm ? (
                        <div className="topic-form">
                            <input
                                placeholder="Topic name"
                                value={topicName}
                                onChange={function (e) { setTopicName(e.target.value) }}
                            />
                            <select value={difficulty} onChange={function (e) { setDifficulty(e.target.value) }}>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                            <input
                                placeholder="Notes (optional)"
                                value={notes}
                                onChange={function (e) { setNotes(e.target.value) }}
                            />
                            <div className="form-actions">
                                <button onClick={handleAddTopic} className="btn-primary">Add</button>
                                <button onClick={() => setShowForm(false)} className="btn-secondary">Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => setShowForm(true)} className="btn-add-topic">
                            <FiPlus size={14} /> Add Topic
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default SubjectCard
