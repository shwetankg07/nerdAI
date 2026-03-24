import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StudyProvider } from './context/StudyContext'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './pages/Dashboard/Dashboard'
import Subjects from './pages/Subjects/Subjects'
import Tasks from './pages/Tasks/Tasks'
import Revision from './pages/Revision/Revision'
import AITools from './pages/AITools/AITools'
import './App.css'

function App() {
  return (
    <StudyProvider>
      <BrowserRouter>
        <div className="app-layout">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/revision" element={<Revision />} />
              <Route path="/ai-tools" element={<AITools />} />
            </Routes>
          </main>
        </div>
        <ToastContainer position="bottom-right" />
      </BrowserRouter>
    </StudyProvider>
  )
}

export default App
