import { useStudy } from '../context/StudyContext'

function useSubjects() {
    const { subjects, addSubject, deleteSubject, topics, addTopic, updateTopic, deleteTopic } = useStudy()

    function createSubject(name, description, color) {
        const newSubject = {
            id: Date.now().toString(),
            name: name,
            description: description,
            color: color
        }
        addSubject(newSubject)
    }

    function removeSubject(id) {
        deleteSubject(id)
    }

    function createTopic(subjectId, name, difficulty, notes) {
        const newTopic = {
            id: Date.now().toString(),
            subjectId: subjectId,
            name: name,
            difficulty: difficulty,
            status: 'Not Started',
            notes: notes
        }
        addTopic(newTopic)
    }

    function changeTopicStatus(id, status) {
        updateTopic(id, { status: status })
    }

    function removeTopic(id) {
        deleteTopic(id)
    }

    function getTopicsForSubject(subjectId) {
        return topics.filter(t => t.subjectId === subjectId)
    }

    return {
        subjects, createSubject, removeSubject,
        topics, createTopic, changeTopicStatus, removeTopic, getTopicsForSubject
    }
}

export default useSubjects
