import { useState } from 'react'
import { generateSummary, generateQuestions, generateFlashcards } from '../../services/aiService'
import { FiZap, FiHelpCircle, FiLayers } from 'react-icons/fi'

function AITools() {
    const [topic, setTopic] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    const [activeMode, setActiveMode] = useState('summary')
    const [error, setError] = useState('')

    async function handleGenerate() {
        if (topic.trim() === '') return
        setLoading(true)
        setResult('')
        setError('')
        try {
            let response = ''
            if (activeMode === 'summary') {
                response = await generateSummary(topic)
            } else if (activeMode === 'questions') {
                response = await generateQuestions(topic)
            } else {
                response = await generateFlashcards(topic)
            }
            setResult(response)
        } catch (err) {
            setError('Error: ' + err.message)
        }
        setLoading(false)
    }

    return (
        <div className="page">
            <h1 className="page-title">AI Study Assistant</h1>
            <p className="page-subtitle">Generate study materials powered by AI</p>

            <div className="card">
                <div className="ai-mode-tabs">
                    <button
                        onClick={function () { setActiveMode('summary') }}
                        className={activeMode === 'summary' ? 'mode-tab active' : 'mode-tab'}
                    >
                        <FiZap size={16} /> Summary
                    </button>
                    <button
                        onClick={function () { setActiveMode('questions') }}
                        className={activeMode === 'questions' ? 'mode-tab active' : 'mode-tab'}
                    >
                        <FiHelpCircle size={16} /> Questions
                    </button>
                    <button
                        onClick={function () { setActiveMode('flashcards') }}
                        className={activeMode === 'flashcards' ? 'mode-tab active' : 'mode-tab'}
                    >
                        <FiLayers size={16} /> Flashcards
                    </button>
                </div>

                <div className="ai-input-row">
                    <input
                        placeholder={'Enter a topic (e.g. Binary Search Trees)'}
                        value={topic}
                        onChange={function (e) { setTopic(e.target.value) }}
                        className="ai-input"
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="btn-primary"
                    >
                        {loading ? 'Generating...' : 'Generate'}
                    </button>
                </div>

                {error && <p className="error-msg">{error}</p>}

                {result && (
                    <div className="ai-result">
                        <pre>{result}</pre>
                    </div>
                )}

                {!result && !loading && (
                    <div className="ai-placeholder">
                        <FiZap size={40} />
                        <p>Enter a topic above and click Generate to get AI-powered study materials.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AITools
