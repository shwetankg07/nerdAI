import { createContext, useState, useContext } from 'react'

const StudyContext = createContext()

function StudyProvider({ children }) {
  const [subjects, setSubjects] = useState([])
  const [topics, setTopics] = useState([])
  const [tasks, setTasks] = useState([])
  const [revisions, setRevisions] = useState([])

  function addSubject(subject) {
    setSubjects([...subjects, subject])
  }

  function deleteSubject(id) {
    setSubjects(subjects.filter(s => s.id !== id))
    setTopics(topics.filter(t => t.subjectId !== id))
  }

  function addTopic(topic) {
    setTopics([...topics, topic])
  }

  function updateTopic(id, updated) {
    setTopics(topics.map(t => (t.id === id ? { ...t, ...updated } : t)))
  }

  function deleteTopic(id) {
    setTopics(topics.filter(t => t.id !== id))
  }

  function addTask(task) {
    setTasks([...tasks, task])
  }

  function updateTask(id, updated) {
    setTasks(tasks.map(t => (t.id === id ? { ...t, ...updated } : t)))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  function addRevision(revision) {
    setRevisions([...revisions, revision])
  }

  function deleteRevision(id) {
    setRevisions(revisions.filter(r => r.id !== id))
  }

  return (
    <StudyContext.Provider value={{
      subjects, addSubject, deleteSubject,
      topics, addTopic, updateTopic, deleteTopic,
      tasks, addTask, updateTask, deleteTask,
      revisions, addRevision, deleteRevision
    }}>
      {children}
    </StudyContext.Provider>
  )
}

function useStudy() {
  return useContext(StudyContext)
}

export { StudyProvider, useStudy }
