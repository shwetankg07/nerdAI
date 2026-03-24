const GEMINI_API_KEY = 'AIzaSyDpAsWamUNEI_ZMZsqbxD89-lZC403e8t4'

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + GEMINI_API_KEY
async function askGemini(prompt) {
    const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        { text: prompt }
                    ]
                }
            ]
        })
    })
    const data = await response.json()
    if (!response.ok || !data.candidates) {
        throw new Error(data.error?.message || 'Unknown API error')
    }
    return data.candidates[0].content.parts[0].text
}

async function generateSummary(topic) {
    const prompt = 'Generate a short and clear study summary for the topic: ' + topic
    return await askGemini(prompt)
}

async function generateQuestions(topic) {
    const prompt = 'Generate 5 practice questions for the topic: ' + topic
    return await askGemini(prompt)
}

async function generateFlashcards(topic) {
    const prompt = 'Generate 5 flashcards with a question and answer for the topic: ' + topic
    return await askGemini(prompt)
}

export { generateSummary, generateQuestions, generateFlashcards }
